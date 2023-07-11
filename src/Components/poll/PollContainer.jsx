import React from 'react'
import Polldialogue from './Polldialogue'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

function PollContainer() {


    const polls=[
        {
            Question:"This is big Question fsfdf fsdf  fsdf sfdfdf no 1",
            catogries:['electronics','science','facts'],
            totalVotes:30
        },
        {
            Question:"This is big Question fsfdf fsdf  fsdf sfdfdf no 1",
            catogries:['electronics','science','facts'],
            totalVotes:30
        },
        {
            Question:"This is big Question fsfdf fsdf  fsdf sfdfdf no 1",
            catogries:['electronics','science','facts'],
            totalVotes:30
        },
        {
            Question:"This is big Question fsfdf fsdf  fsdf sfdfdf no 1",
            catogries:['electronics','science','facts'],
            totalVotes:30
        },
        {
            Question:"This is big Question fsfdf fsdf  fsdf sfdfdf no 1",
            catogries:['electronics','science','facts'],
            totalVotes:30
        },
        {
            Question:"This is big Question fsfdf fsdf  fsdf sfdfdf no 1",
            catogries:['electronics','science','facts'],
            totalVotes:30
        },
    ]


    if(!localStorage.getItem("scrollPos"))
    {
        localStorage.setItem("scrollPos",0)
    }
    
    window.onscroll=(e)=>{
        const scrollPos= localStorage.getItem("scrollPos");
        localStorage.setItem("scrollPos",window.scrollY)
        console.log(window.scrollY)
    }
  
    const handelScroll=()=>{
        const scrollPos=localStorage.getItem("scrollPos")
        // console.log("running handelScroll and scrollPos =",scrollPos);
        window.scrollTo(0,300)
    }
   let page = useSelector((state) => {
      return state.component.page;
    });


  return (
    <div className='PollContainer--Container'>
        {
            polls.map( (ele,key)=>{
                return <Polldialogue  key={key} Questions={ele.Question} Catogries={ele.catogries} totalVotes={ele.totalVotes}/>
            })
        }
         {  page==="home"? handelScroll():console.log("not home Screen")}
    </div>
  )
}

export default PollContainer