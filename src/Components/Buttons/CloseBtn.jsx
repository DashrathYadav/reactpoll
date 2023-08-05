import React from 'react'
import "./CloseBtn.css"

function CloseBtn(props) {
  return (
    <div className='closeBtn-container'>
        <a className='closeBtn--a' href="#">{props.display}</a>
    </div>
  )
}


export default CloseBtn