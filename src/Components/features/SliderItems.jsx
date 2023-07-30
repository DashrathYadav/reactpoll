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
      page:page,
    })
  };
  
  return (

    <div className="Slider--div" onClick={handleClick}>
      <img
        className="Slider--profile Slider--icon"
        src={props.iconUrl}
        width={90}
        alt={props.name}
        action="setPage"
      ></img>
      <h3>{props.name} </h3>
    </div>

    )
}
