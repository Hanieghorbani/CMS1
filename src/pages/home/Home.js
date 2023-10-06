import React from "react"
import Feature from "../../components/feature/Feature"
import Chart from "../../components/chart/Chart"
import WidgetSm from "../../components/widgetSm/WidgetSm"
import WidgetLg from "../../components/widgetLg/WidgetLg"
export default function Home() {
  return (
    <div className="mt-3" style={{ width: "80%" }}>
      <Feature />
      <Chart />
      <div className="d-flex justify-content-between">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}
