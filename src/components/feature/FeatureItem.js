import React from 'react'
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
export default function FeatureItem(props) {
    let iconObj = {
        ArrowDownwardIcon : <ArrowDownwardIcon className='text-danger fs-2'/>,
        ArrowUpwardIcon : <ArrowUpwardIcon className='text-success fs-2'/>
    }
  return (
    <div className='featureItem shadow p-5 rounded'>
        <h3 className=''>{props.title}</h3>
        <div className='d-flex align-items-center justify-content-between fw-bold fs-3'>
            <p>$2,415</p>
            <p className='ms-5 d-flex align-items-center'>{props.rate}{iconObj[props.icon]}</p>
        </div>
        <span className='text-secondary'>compared to last month</span>
    </div>
  )
}
