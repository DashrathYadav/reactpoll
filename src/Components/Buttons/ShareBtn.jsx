import React from 'react'
import "./ShareBtn.css"

function ShareBtn(props) {
  return (
    <div className='ShareBtn-container'>
        <a className='ShareBtn--a' href="#">{props.display}</a>
    </div>
  )
}


export default ShareBtn