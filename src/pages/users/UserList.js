import React, { useState, useEffect } from "react"
import { DataGrid } from "@mui/x-data-grid"
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"
import { Link } from "react-router-dom"
import "./UserList.css"
export default function UserList() {
  const [rows, setRows] = useState([])
  const [getUser, setGetUser] = useState(false)

  useEffect(() => {
    fetch("https://cms-1-ddec3-default-rtdb.firebaseio.com/users.json")
      .then((res) => res.json())
      .then((data) => {
        setRows(data ? Object.entries(data) : [])
      })
  }, [getUser])
  let usersArr = []

  rows.forEach((item) => {
    usersArr.push(item[1])
  })

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to="/" className="link text-dark">
            <div>
              <img src="imgs/testimonials-5.jpg" className="usersImg" />
              {params.row.username}
            </div>
          </Link>
        )
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row.id}`} className="link">
              <button className="bg-success btn text-white btn-sm">Edit</button>
            </Link>
            <DeleteOutlineIcon
              style={{ cursor: "pointer" }}
              className="text-danger ms-3 fs-2"
              onClick={() => userDelete(params.row.id)}
            />
          </>
        )
      },
    },
  ]

  async function userDelete(userId) {
    let userSelect = rows.find((item) => {
      return item[1].id == userId
    })
    await fetch(
      `https://cms-1-ddec3-default-rtdb.firebaseio.com/users/${userSelect[0]}.json`,
      {
        method: "DELETE",
      }
    )
    setGetUser((prev) => !prev)
  }
  return (
    <div  style={{width:'80%'}}>
      <DataGrid
        rows={usersArr}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 3,
            },
          },
        }}
        pageSizeOptions={3}
        disableRowSelectionOnClick
      />
    </div>
  )
}
