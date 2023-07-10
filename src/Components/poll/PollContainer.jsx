import React from 'react'
import Polldialogue from './Polldialogue'


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


  return (
    <div className='PollContainer--Container'>
        {
            polls.map( (ele,key)=>{
                return <Polldialogue  key={key} Questions={ele.Question} Catogries={ele.catogries} totalVotes={ele.totalVotes}/>
            })
        }
    </div>
  )
}

export default PollContainer