import {React,useEffect, useState} from 'react'
import axios from 'axios';
import './Analytics.css'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";

export default function Analytics() {

  const [mainCategoryData, setMainCategoryData] = useState([]);

const getCategories = () => {
  axios
    .get("http://localhost:3000/getCategories")
    .then(function (response) {

      // Transform the response.data into the desired format
      const transformedData = response.data.Categories.map((categoryData) => {
        return {
          subject: categoryData.MainCategory.name,
          A: categoryData.MainCategory.pollCount,
        };
      });

      // Set the transformed data in the state
      setMainCategoryData(transformedData);
    });
};

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <RadarChart
      className='chart'
      cx={300}
      cy={250}
      outerRadius={150}
      width={1000}
      height={500}
      data={mainCategoryData}
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
  )
}
