import React, { useEffect, useState } from 'react'
import Polldialogue from './Polldialogue'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import axios from 'axios'

function PollContainer() {

    const [polls,setPolls] = useState([]);

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

  


    if(!localStorage.getItem("scrollPos"))
    {
        localStorage.setItem("scrollPos",0)
    }

    useEffect(()=>{
        getPolls();
    },[]);
    
    window.onscroll=(e)=>{
        const scrollPos= localStorage.getItem("scrollPos");
        localStorage.setItem("scrollPos",window.scrollY)
        console.log(window.scrollY)
    }
  
    const handelScroll=()=>{
        const scrollPos=localStorage.getItem("scrollPos")
        window.scrollTo(0,300)
    }
   let page = useSelector((state) => {
      return state.component.page;
    });

  return (
    <div className='PollContainer--Container'>
        {
            polls.map( (ele,key)=>{
                console.log(ele)
                return <Polldialogue  key={key} Questions={ele.Question} Catogries={ele.Category} totalVotes={ele.voter_ids.length}/>
            })
        }
         {/* {  page==="home"? handelScroll():console.log("not home Screen")} */}
    </div>
  )
}

export default PollContainer