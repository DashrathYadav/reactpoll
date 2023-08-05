import { BarChart,Bar, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts";
import './Barchart.css'
import React from 'react'

export const Barchart = ({data}) => {

    // const data = [
    //     {
    //       text: 'Page A',
    //       uv: 4000,
    //       pv: 2400,
    //       amt: 2400,
    //       fill:"#FF0000",
    //     },
    //     {
    //       text: 'Page B',
    //       uv: 3000,
    //       pv: 1398,
    //       amt: 2210,
    //       fill:"#FFFF00",
    //     },
    //     {
    //       text: 'Page C',
    //       uv: 2000,
    //       pv: 9800,
    //       amt: 2290,
    //       fill:"#8884d8",
    //     },
    //     {
    //       text: 'Page D',
    //       uv: 2780,
    //       pv: 3908,
    //       amt: 2000,
    //       fill:"#8884d8",
    //     },
    //     {
    //       text: 'Page E',
    //       uv: 1890,
    //       pv: 4800,
    //       amt: 2181,
    //       fill:"#FF0000",
    //     },
    //     {
    //       text: 'Page F',
    //       uv: 2390,
    //       pv: 3800,
    //       amt: 2500,
    //       fill:"#FFFF00",
    //     },
    //     {
    //       text: 'Page G',
    //       uv: 3490,
    //       pv: 4300,
    //       amt: 2100,
    //       fill:"#8884d8",
    //     },
    //   ];

      const colors=["#8884d8","#FFFF00","#FF0000"]
  return (
    <div className="Barchart--container">
   <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={300}
          height={100}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="text" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
       
    </div>
  )
}
