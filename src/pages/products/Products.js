import React, { useState, useEffect } from "react"
import { DataGrid } from "@mui/x-data-grid"
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"
import { Link } from "react-router-dom"
import "./Products.css"
export default function Products() {
  const [rows, setRows] = useState([])
  const [getProd, setGetProd] = useState(false)

  useEffect(() => {
    fetch("https://cms-1-ddec3-default-rtdb.firebaseio.com/products.json")
      .then((res) => res.json())
      .then((data) => {
        setRows(data ? Object.entries(data) : [])
      })
  }, [getProd])
  let  productsArr = []
  rows.forEach((item) => {
    productsArr.push(item[1])
  })

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "title",
      headerName: "Name",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to={`/products/${params.row.id}`} className="link text-dark">
            <div>
              <img src={params.row.avatar} className="usersImg" />
              {params.row.title}
            </div>
          </Link>
        )
      },
    },
    {
      field: "price",
      headerName: "Price",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/products/${params.row.id}`} className="link">
              <button className="bg-success btn text-white btn-sm">Edit</button>
            </Link>
            <DeleteOutlineIcon
              style={{ cursor: "pointer" }}
              className="text-danger ms-3 fs-2"
              onClick={() => productDelete(params.row.id)}
            />
          </>
        )
      },
    },
  ]

  async function productDelete(productId) {
    let productSelect = rows.find((item) => {
      return item[1].id == productId
    })
    await fetch(
      `https://cms-1-ddec3-default-rtdb.firebaseio.com/products/${productSelect[0]}.json`,
      {
        method: "DELETE",
      }
    )
    setGetProd((prev) => !prev)
  }
  return (
    <div style={{width:'80%'}}>
      <DataGrid
        rows={productsArr}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 4,
            },
          },
        }}
        pageSizeOptions={4}
        disableRowSelectionOnClick
        checkboxSelection
      />
    </div>
  )
}
