import React,{useEffect,useState} from "react"
import Feature from "../../components/feature/Feature"
import Chart from "../../components/chart/Chart"
import WidgetSm from "../../components/widgetSm/WidgetSm"
import WidgetLg from "../../components/widgetLg/WidgetLg"
import useFetch from "../../hooks/useFetch"
export default function Home() {
  const [chartDatas,setChartDatas,chartDatasArr] = useFetch("https://cms-1-ddec3-default-rtdb.firebaseio.com/chart.json")

  return (
    <div className="mt-3" style={{ width: "80%" }}>
      <Feature />
      <Chart data={chartDatasArr} width='w-100' height={300}/>
      <div className="d-flex justify-content-between">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}
