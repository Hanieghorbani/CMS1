import React,{useEffect,useState} from "react"
import Feature from "../../components/feature/Feature"
import Chart from "../../components/chart/Chart"
import WidgetSm from "../../components/widgetSm/WidgetSm"
import WidgetLg from "../../components/widgetLg/WidgetLg"
export default function Home() {
  const [chartDatas, setChartDatas] = useState([])

  useEffect(() => {
    fetch("https://cms-1-ddec3-default-rtdb.firebaseio.com/chart.json")
      .then((res) => res.json())
      .then((data) => {
        setChartDatas(Object.entries(data))
      }).catch(
        setChartDatas([])
      )
  }, [])

  let chartDatasArr = []
  if (chartDatas) {
     chartDatas.forEach((item) => {
    chartDatasArr.push(item[1])
  })
  }
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
