import React, { useState, useEffect } from "react"

export default function useFetch(url) {
  const [datas, setDatas] = useState('')

  useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setDatas(Object.entries(data))
        })
  }, [])

  let arrDatas = []
  if (datas) {
     datas.forEach((item) => {
    arrDatas.push(item[1])
  })
  }

  return [datas,setDatas,arrDatas]
}
