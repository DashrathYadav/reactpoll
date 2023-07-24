import React from 'react'
import "./Slider.css"

export const SliderItems = (props) => {
  return (

    <div className="Slider--div">
      <img
        className="Slider--profile Slider--icon"
        src={props.iconUrl}
        width={90}
      ></img>
      <h3>{props.name} </h3>
    </div>

    )
}
