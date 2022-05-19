import React from "react"
import "./Title.css"


export default function Title({titleStr}) {
  return (
    <div className="title_wrapper">
      <div className="page_title">
        <h1>{titleStr}</h1>
      </div>
    </div>
  )
}