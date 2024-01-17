import React, { useEffect, useState } from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

export default function Chart(props) {
  const [chartMainDatas, setChartMainDatas] = useState([])


  return (
    <div className={`${props.width} p-4 shadow rounded my-5`}>
      <h5 className="fw-bold mb-4">
        Month Sale
      </h5>
      <ResponsiveContainer width="100%" height={props.height}>
        <LineChart
          width={500}
          height={props.height}
          data={props.data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <Tooltip />
          <Line
            connectNulls
            type="monotone"
            dataKey="Sale"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </LineChart>
      </ResponsiveContainer>
      
    </div>
  )
}
