import React from "react"
import "./Feature.css"
import FeatureItem from "./FeatureItem"
export default function Feature() {
  let infosFeature = [
    { title: "Revanue", rate: "-11.4", icon: "ArrowDownwardIcon" },
    { title: "Sales", rate: "-1.4", icon: "ArrowDownwardIcon" },
    { title: "Cost", rate: "+2.7", icon: "ArrowUpwardIcon" },
  ]
  return (
    <div className="d-flex justify-content-between">
       {infosFeature.map(info=>(
         <FeatureItem {...info}/>
       ))}
    </div>
  )
}
