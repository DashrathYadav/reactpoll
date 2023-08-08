import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';
import "./Piechart.css";


const Piechart = (props) => {


      const data = props.props.map((item) => ({
        value: item.A,
        name: item.subject,
      }));
      
      const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
      
      const RADIAN = Math.PI / 180;
      
      const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? "start" : "end"}
            dominantBaseline="central"
          >
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        );
      };
  return (
    <div>
        <h1 className='Pie-head'>PieChart for Main Category</h1>
         <div className='Piechart'>
            <PieChart width={400} height={500} >
            <Pie
                data={data}
                cx={200}
                cy={200}
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
            >
                {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Legend />
            </PieChart>
         </div>
    </div>
    
    
  );
};

export default Piechart;
