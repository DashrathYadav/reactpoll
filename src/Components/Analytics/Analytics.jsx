import {React,useEffect, useState} from 'react'
import axios from 'axios';

export default function Analytics() {

  

  const [polls,setPolls] = useState([]);

  const [categories,setCategories] = useState({});

  const getPolls= ()=>{
    axios
    .post("http://localhost:3000/getPolls", {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((response)=>{
            setPolls(response.data.poll);
      })
      .catch((err)=>{
        console.log(err)
      })
  }

  useEffect(() => {
    getPolls();
  }, []);
  useEffect(() => {
    const categoriesCount = {};

    polls.forEach((poll) => {
      const categoriesArray = poll.Category;
      categoriesArray.forEach((category) => {
        const categoryKey = category.toLowerCase();
        categoriesCount[categoryKey] = (categoriesCount[categoryKey] || 0) + 1;
      });
    });

    setCategories(categoriesCount);
  }, [polls]);

  console.log(categories)


  return (
    <div>Analytics</div>
  )
}
