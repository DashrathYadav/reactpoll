import React, { useState, useEffect } from "react";
import "./PollingUi.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { OnVote } from "./PollContainer";
import axios from "axios";
import { Barchart } from "../charts/Barchart";
import { default as Btn } from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import CloseBtn from "../Buttons/CloseBtn";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ShareBtn from "../Buttons/ShareBtn";
export default function PollingUi({ pollClickedData }) {
  const dispatch = useDispatch();

  console.log("poll clicked data ", pollClickedData);
  console.log(pollClickedData.Category);

  const [fetchPoll, setFetchPoll] = useState({
    category: [],
    question: "",
    creatorId: "",
    totalVotes: "",
    pollid: "",
    options: [],
  });

  const getData = () => {
    console.log("getdata is called");
    // axios
    //   .post("http://localhost:3000/getPoll", pid, {
    //     headers: { "Access-Control-Allow-Origin": "*" },
    //   })
    //   .then((response) => {
    // const pollClickedData = reosponse.data.poll;

    setFetchPoll((prev) => {
      console.log("setfetchpoll is called");
      return {
        category: pollClickedData?.Category?.SubCategories,
        question: pollClickedData?.Question,
        creatorId: pollClickedData?.creatorId,
        totalVotes: pollClickedData?.voter_ids?.length,
        pollid: pollClickedData?._id,
        options: pollClickedData?.Options?.map((option) => option.text),
      };
    });
    // })
    // .catch((error) => {
    //   console.log(error.message);
    // });
  };
  useEffect(() => {
    getData();
  }, [pollClickedData]);

  //for sending response taking user id
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
        console.log("polled successfully", response.status);

        // on successVote invoking Toast
        toastInvoke("Vote Submitted SuccessFully");

        setTimeout(()=>{

          if (sessionStorage.getItem("sharedPollId")) {
            sessionStorage.setItem("sharedPollId", "");
            window.location.href = "/";
          }
  
          dispatch({
            type: "setrenderPollUI",
            pollClickedData: "",
          });
          OnVote("test");
        },4000);

        })
        .catch((error) => {
          console.log(error);
  
          console.log("error");
        });

        
         
      
  };

  const handleVisulize = () => {
    dispatch({
      type: "setVisualizeUI",
      pollClickedData: pollClickedData,
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

  //handling closing
  const handleClose = (e) => {
    if (sessionStorage.getItem("sharedPollId")) {
      sessionStorage.setItem("sharedPollId", "");
      window.location.href = "/";
    }

    dispatch({
      type: "setrenderPollUI",
      pollClickedData: "",
    });
  };


// handling  share and toast 
  const handleShare=(e)=>{

    navigator.clipboard.writeText("http://localhost:5173/unitPoll/"+`${fetchPoll.pollid}`);
    console.log("url copied toas invoked")
    toastInvoke("Sharable Url Copied SuccessFully");
      
  }

  function toastInvoke ( message,direction="top-right"){
    toast(`🦄!${message}`,{
      position: direction,
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      }); 
  }

  return (
    <div className="pollingcontainer">
      <div className="pollUIContainer">
        <div className="pollUI--split">
          <div className="pollUI--data">
            <div className="pollingUi--infoContainer">
              <p className="pollingUi--questionpollingUi--flex" id="Question">
                <span className="PollUi--span">
                  <u>Question</u> :{" "}
                </span>
                <span className="pollingUi--span-ans">
                  {" "}
                  {fetchPoll.question}
                </span>
              </p>
              <p className="pollingUi--CategorypollingUi--flex" id="category">
                <span className="pollingUi--span">
                  <u>category </u>:
                </span>
                <span className="pollingUi--span-ans">
                  {fetchPoll.category?.map((ele) => {
                    return ele + "  ";
                  })}
                </span>
              </p>
              <p className="pollingUi--totvotespollingUi--flex">
                <span className="pollingUi--span">
                  <u>Total-Votes</u> :
                </span>{" "}
                <span className="pollingUi--span-ans">
                  {" "}
                  {fetchPoll.totalVotes}
                </span>
              </p>
              <p className="pollingUi--creatorpollingUi--flex">
                <span className="pollingUi--span">
                  <u>Creator ID</u> :
                </span>{" "}
                <span className="pollingUi--span-ans">
                  {" "}
                  {fetchPoll.creatorId}
                </span>
              </p>
            </div>

            <div className="pollingUi--optionContainer">
              <span className="pollingUi--span">
                <u>Option</u> :
              </span>
              {fetchPoll?.options?.map((option, index) => {
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
                    <label className="addSpace" htmlFor={`radio-${index}`}>
                      {fetchPoll?.options[index]}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          {/* graph area */}
          <div className="pollUI--graphContainer">
            <Barchart data={pollClickedData?.Options} />
          </div>
        </div>

        {/* {submitBtn} */}
        {/* <Button className=""/> */}
        <span onClick={handleClose} className="pollUI--btn-pos pollUI--btn">
          <CloseBtn display={"Close"} />
        </span>
        <button
          className="pollUI--btn-pos pollUI--btn pollUI--submit btn-grad-submit"
          onClick={handlePolling} >
          Vote
        </button>
        <span  className="pollUI--btn-pos pollUI--btn pollUI--btn--share " onClick={handleShare} >
          <ShareBtn display={"share"} />
        </span>
      </div>

      <ToastContainer />
    </div>
  );
}
