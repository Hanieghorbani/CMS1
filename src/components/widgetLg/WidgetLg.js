import React, { useEffect, useState } from "react"
import Table from "react-bootstrap/Table"
import "./WidgetLg.css"
export default function WidgetLg() {
  const [lastTr, setlastTr] = useState([])
  let Button = ({ type }) => {
    return <button className={`widgetLgBtn ${type} btn-sm btn` }>{type}</button>
  }

  useEffect(() => {
    fetch("https://cms-1-ddec3-default-rtdb.firebaseio.com/latestTransAction.json")
      .then((res) => res.json())
      .then((data) => {
        setlastTr(Object.entries(data))
      })
      .catch(setlastTr([]))
  }, [])

  let lastTrArr = []
  if (lastTr) {
    lastTr.forEach((item) => {
      lastTrArr.push(item[1])
    })
  }
  return (
    <div className="widgetLg shadow p-4">
      <h5 className="fw-bold mb-4">Latest TransActions</h5>
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className="">
        {lastTrArr.map(item=>(
         <tr>
            <td className="d-flex align-items-center">
              <img src="imgs/testimonials-5.jpg" />
              <p className="mt-3 ms-3 fw-bold">{item.customer}</p>
            </td>
            <td className="text-secondary">{item.date}</td>
            <td className="text-secondary">{item.amount}</td>
            <td>
              <Button type={item.status}/>
            </td>
          </tr>
      ))}
         
        </tbody>
      </Table>
    </div>
  )
}
