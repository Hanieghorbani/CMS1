import React, { useEffect, useState } from "react"
import Chart from "../../components/chart/Chart"
import "./Product.css"
import { useParams } from "react-router-dom"
import { Form } from "react-bootstrap"
import PublishIcon from "@mui/icons-material/Publish"
import useFetch from "../../hooks/useFetch"
export default function Product() {
  const [chartDatas, setChartDatas, chartDatasArr] = useFetch(
    "https://cms-1-ddec3-default-rtdb.firebaseio.com/productData.json"
  )
  const [products, setProducts] = useFetch(
    "https://cms-1-ddec3-default-rtdb.firebaseio.com/products.json"
  )
  const [mainProdData, setMainProdData] = useState([])
  const [parametr, setParametr] = useState(useParams())

  //show selected product
  useEffect(() => {
    fetch("https://cms-1-ddec3-default-rtdb.firebaseio.com/products.json")
      .then((res) => res.json())
      .then((data) => {
        return Object.entries(data)
      })
      .then((prod) => {
        let findProd = prod.filter((item) => {
          return item[1].id == parametr.productID
        })
        setMainProdData(findProd[0][1])
      })
  }, [parametr])

  return (
    <div style={{ width: "80%" }} className="product-container">
      <div className="d-flex justify-content-between">
        <h2 className="fw-bold">Product</h2>
        <button className="btn btn-success">Create</button>
      </div>

      <div className="d-flex justify-content-between">
        <Chart data={chartDatasArr} width="w-50" height={200} />
        <div className="shadow rounded my-5 p-4 rightProductInfo">
          <div className="d-flex align-items-center">
            <img src={`/${mainProdData.avatar}`} />
            <h5 className="ms-3">{mainProdData.title} LapTop</h5>
          </div>

          <div className="w-50 mt-3">
            <div className="d-flex justify-content-between">
              <h6>ID:</h6>
              <p>{mainProdData.id}</p>
            </div>

            <div className="d-flex justify-content-between">
              <h6>Name:</h6>
              <p>{mainProdData.title}</p>
            </div>

            <div className="d-flex justify-content-between">
              <h6>Sales:</h6>
              <p>90000$</p>
            </div>

            <div className="d-flex justify-content-between">
              <h6>Active:</h6>
              <p>Yes</p>
            </div>

            <div className="d-flex justify-content-between">
              <h6>In Stock:</h6>
              <p>No</p>
            </div>
          </div>
        </div>
      </div>

      <div className="editProd-container shadow p-4 d-flex justify-content-between mb-5">
        <div>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-secondary">Product Name</Form.Label>
              <Form.Control type="email" placeholder={mainProdData.title} />
            </Form.Group>

            <Form.Group controlId="formGridState" className="my-3">
              <Form.Label className="text-secondary">In Stock</Form.Label>
              <Form.Select>
                <option>YES</option>
                <option>NO</option>
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="formGridState">
              <Form.Label className="text-secondary">Acrive</Form.Label>
              <Form.Select>
                <option>YES</option>
                <option>NO</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </div>
        <div className="d-flex flex-column justify-content-center">
          <div className="d-flex align-items-center">
            <img src={`/${mainProdData.avatar}`} />
            <PublishIcon className="fs-1 ms-3 iconPublish" />
          </div>
          <button className="btn btn-success mt-4">Upload(Edit)</button>
        </div>
      </div>
    </div>
  )
}
