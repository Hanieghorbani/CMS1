import React from "react"
import VisibilityIcon from "@mui/icons-material/Visibility"
import "./WidgetSm.css"
import { useEffect } from "react"
import { useState } from "react"

export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([])
  useEffect(() => {
    fetch("https://cms-1-ddec3-default-rtdb.firebaseio.com/newMember.json")
      .then((res) => res.json())
      .then((data) => {
        setNewUsers(Object.entries(data))
      }).catch(
        setNewUsers([])
      )
  }, [])

  let newMemberDatasArr = []
  newUsers.forEach((item) => {
    newMemberDatasArr.push(item[1])
  })

  return (

    <div className="widgetSm shadow p-4">
      <h5 className="fw-bold mb-4">New Join Members</h5>
      {newMemberDatasArr.map(user=>(
        <div className="d-flex justify-content-between align-items-center">
        <img src="imgs/testimonials-5.jpg" />
        <div className="text-center">
          <h6>{user.username}</h6>
          <p className="text-secondary">{user.title}</p>
        </div>
        <VisibilityIcon className="visibleIcon text-secondary" />
      </div>
      ))}
      
    </div>
  )
}
