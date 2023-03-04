import React from "react"
import { Chrono } from "react-chrono";
import './journey.css'
import { getTimeline } from "../Data/data";


const Journey = () => {
 

  return (
    <div className="timeline">
    <div className="heading-timeline">
       <h2>My Education </h2>
    </div>
    <div className="main-timeline">
  <Chrono items={getTimeline()} mode="VERTICAL_ALTERNATING" />
</div>
</div>
  )
}


export default Journey;