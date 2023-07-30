import React from 'react';
import "./Radarchart.css";
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis
  } from "recharts";

export default function Radarchart(props) {
  console.log(props.props)  
  return (
    <div>
      <h1 className='Radarhead'>Radar Chart of Main Category</h1>
      <div className='Radarchart'>
      <RadarChart
      
      cx={300}
      cy={250}
      outerRadius={150}
      width={1000}
      height={500}
      data={props.props}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar
        name="MainCategory"
        dataKey="A"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
    </RadarChart>
    </div>
    </div>
    
    
  )
}
