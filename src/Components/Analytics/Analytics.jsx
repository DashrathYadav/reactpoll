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
import Radarchart from '../charts/Radarchart';
import Piechart from '../charts/Piechart';

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
    <div className='Analytics-main'>
      <div className='Analytics-radar'>
      <Radarchart props={mainCategoryData}/>cls
      </div>
      <div className='Analytics-pie'>
      <Piechart props = {mainCategoryData}/>
      </div>
      
    </div>
    
  )
}
