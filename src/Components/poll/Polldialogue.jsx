import React from 'react'
import "./dialogue.css"
function Polldialogue() {

  const popUp=(e)=>{
      console.log("pop clicked")
  }


  return (
    <>
        <div className='Polldialogue--Container' onClick={popUp}>
                <p className='Polldialogue--Question' id="Question"> Question : this is very very very big QuestiionQuestiionQuestiionQuestiionQuestiionQuestiionQuestiion</p>
                <p className='Polldialogue--category' id='category'>category:{}</p>
                <div className='Polldialogue--totalVotes'> <span>5</span></div>

        </div>
    </>
  )
}

export default Polldialogue