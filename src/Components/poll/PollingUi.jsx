import React, { useState } from "react";
import './PollingUi.css'
import { useSelector } from "react-redux"
import axios from 'axios'
export default function PollingUi() {

  {/* Need to fetch PollId and information will have to create get for poll to get the details */}
  const category = ["a","b"];
  const question = "This is a Question";
  const creatorId = "dummyCreatorId";
  const totalVotes = "20";
  const pollid = "dummyPollId"

  const [formData, setformData] = useState({
   
  });


  let id = useSelector((state) => {
    return state.component.loginId;
  });

    const handlePolling= (event)=>{
      console.log(selectedItem)
      event.preventDefault();
      const data = {
        pollId : pollid,
        voter_Id : id,
        option : selectedItem
      }
      console.log(data)
      axios
      .post("http://localhost:3000/", data, {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((response) => {
        console.log(response.status);
        }
      )
      .catch((error) => {
        console.log(error.message);
      });
    }

    const submitBtn = (
      <a
        className="btn SignUp--lessMargine"
        onMouseOver={(e) => {
          const btnEl = e.target;
          e.target.addEventListener("mouseover", (event) => {
            const x = event.pageX - btnEl.offsetLeft;
            const y = event.pageY - btnEl.offsetTop;
  
            btnEl.style.setProperty("--xPos", x + "px");
            btnEl.style.setProperty("--yPos", y + "px");
          });
        }}
        onClick={handlePolling}
      >
        <span>Submit</span>
      </a>
    );

    const [selectedItem,setSelectedItem] = useState(null);
    const options = [{text:"1.hello",coun:0},{text:"2.bye",count:0}]
    
    const handleItemClick = (index)=>{
      setSelectedItem(index);
    }

  return (
    <div>
      <div className="pollingUi--infoContainer">
        <p className="pollingUi--questionpollingUi--flex" id="Question">
          <span className="PollUi--span">Question : </span>
          <span className="pollingUi--span-ans"> {question}</span>
        </p>
        <p className="pollingUi--CategorypollingUi--flex" id="category">
          <span className="pollingUi--span">category :</span>
          <span className="pollingUi--span-ans">
            {" "}
            {category?.map((ele) => {return ele + "  ";})}
          </span>
        </p>
        <p className="pollingUi--totvotespollingUi--flex">
          <span className="pollingUi--span">Total-Votes :</span>{" "}
          <span className="pollingUi--span-ans"> {totalVotes}</span>
        </p>
        <p className="pollingUi--creatorpollingUi--flex">
          <span className="pollingUi--span">Creator ID :</span>{" "}
          <span className="pollingUi--span-ans"> {creatorId}</span>
        </p>

      </div>

      <div className="pollingUi--optionContainer"> <span className="pollingUi--span">Option :</span>
      
            {options.map((option,index) => {
              return (
              <div key={index} className="pollingUi--insideOptionContainer">
                <input type="radio" id = {`radio-${index}`} name ="radio-group" checked ={selectedItem === index} onChange={()=>handleItemClick(index)} value={index}/>
                <label htmlFor={`radio-${index}`}>{option.text}</label>
              </div>
            ) })}
          </div>
          {/* {submitBtn} */}
          <button onClick={handlePolling}>Submit</button>
    </div>
  );
}
