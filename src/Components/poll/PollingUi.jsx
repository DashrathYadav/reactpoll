import React, { useState, useEffect } from "react";
import "./PollingUi.css";
import { useSelector } from "react-redux";
import axios from "axios";

export default function PollingUi() {

  const pid = { pid: "64aed4a1d229c8f9872c3e26" };
  {/* pid for testing will have to change */}

  
  const [fetchPoll, setFetchPoll] = useState({
    category: [],
    question: "",
    creatorId: "",
    totalVotes: "",
    pollid: "",
    options: []
  });

  const getData = () => {
    axios
      .post("http://localhost:3000/getPoll", pid, {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((response) => {
        const got = response.data.poll;

        setFetchPoll({
          category: got.Category,
          question: got.Question,
          creatorId: got.creatorId,
          totalVotes: got.voter_ids.length,
          pollid: got._id,
          options: got.Options.map(option => (option.opt))
        });
        console.log(fetchPoll.options)
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  useEffect(() => {
    getData();
  }, []);

 

  let id = useSelector((state) => {
    return state.component.loginId;
  });

  const handlePolling = (event) => {

    event.preventDefault();
    const data = {
      pollId: fetchPoll.pollid,
      voter_id: id,
      option: selectedItem,
    };
    console.log(data);
    axios
      .post("http://localhost:3000/submitPoll", data, {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((response) => {
        console.log(response.status);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

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

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <div>
      <div className="pollingUi--infoContainer">
        <p className="pollingUi--questionpollingUi--flex" id="Question">
          <span className="PollUi--span">Question : </span>
          <span className="pollingUi--span-ans"> {fetchPoll.question}</span>
        </p>
        <p className="pollingUi--CategorypollingUi--flex" id="category">
          <span className="pollingUi--span">category :</span>
          <span className="pollingUi--span-ans">
            {" "}
            {fetchPoll.category?.map((ele) => {
              return ele + "  ";
            })}
          </span>
        </p>
        <p className="pollingUi--totvotespollingUi--flex">
          <span className="pollingUi--span">Total-Votes :</span>{" "}
          <span className="pollingUi--span-ans"> {fetchPoll.totalVotes}</span>
        </p>
        <p className="pollingUi--creatorpollingUi--flex">
          <span className="pollingUi--span">Creator ID :</span>{" "}
          <span className="pollingUi--span-ans"> {fetchPoll.creatorId}</span>
        </p>
      </div>

      <div className="pollingUi--optionContainer">
        {" "}
        <span className="pollingUi--span">Option :</span>
        {fetchPoll.options.map((option, index) => {
          return (
            <div key={index} className="pollingUi--insideOptionContainer">
              <input
                type="radio"
                id={`radio-${index}`}
                name="radio-group"
                checked={selectedItem === index}
                onChange={() => handleItemClick(index)}
                value={index}
              />
              <label htmlFor={`radio-${index}`}>{fetchPoll.options[index]}</label>
            </div>
          );
        })}
      </div>
      {/* {submitBtn} */}
      <button onClick={handlePolling}>Submit</button>
    </div>
  );
}
