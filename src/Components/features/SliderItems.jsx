import React from 'react'
import "./Slider.css"
import { useDispatch } from 'react-redux'


export const SliderItems = (props) => {

  const dispatch = useDispatch();
  const handleClick = (e) => {
    const type= e.target.attributes.getNamedItem('action').value;
    const page = props.name;
    dispatch({
      type:type,
      featureSection:page,
    })
  };
  
  

  return (

    <div className="Slider--div" onClick={handleClick}>
      <img
        className="Slider--profile Slider--icon"
        src=  { props.iconUrl}
        width={190}
        alt={props.name}
        action="setFeatureSection"
      ></img>
      {/* <h3>{props.name} </h3> */}
    </div>

    )
}
