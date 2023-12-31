import React, { Profiler, useEffect, useState } from "react";
import Polldialogue from "./Polldialogue";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "axios";
import PollingUi from "./PollingUi";
import Slider from "../features/Slider";
import "./PollContainer.css"
import Analytics from "../Analytics/Analytics";
import Profile from "../features/profile/Profile";

let OnVote;
const PollContainer = function () {
  const dispatch = useDispatch();

  const [polls, setPolls] = useState([]);

  const getPolls = () => {
    axios
      .post("https://reactpollbackend.onrender.com/getPolls", {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((response) => {
        setPolls(response.data.poll);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  OnVote = function (msg) {
    console.log(msg);
    getPolls();
  };

  if (!localStorage.getItem("scrollPos")) {
    localStorage.setItem("scrollPos", 0);
  }

  useEffect(() => {
    console.log("setstate called");
    getPolls();
  }, []);

  window.onscroll = (e) => {
    const scrollPos = localStorage.getItem("scrollPos");
    localStorage.setItem("scrollPos", window.scrollY);
    // console.log(window.scrollY)
  };

  const handelScroll = () => {
    const scrollPos = localStorage.getItem("scrollPos");
    window.scrollTo(0, 300);
  };
  let page = useSelector((state) => {
    return state.component.page;
  });

  let pollUirenderState;
  let pollData;

  //handling on click listner
  const onDialogClicked = (id) => {
    console.log("id clicked is ", id);

    
    // later have to handel poll not find issue
    const pollClickedData = polls.find((poll) => {
      return poll._id === id;
    });

    dispatch({
      type: "setrenderPollUI",
      pollClickedData: pollClickedData,
    });
  };

  [pollUirenderState, pollData] = useSelector((state) => {
    return [state.component.renderPollUI, state.component.pollData];
  });

  
//default feature section poll div
  let renderSection  = 
  ( <div className="PollContainer--Container">
  {polls.map((ele, key) => {
    console.log(ele);
    return (
      <Polldialogue
        key={key}
        id={ele._id}
        Questions={ele.Question}
        Catogries={ele.Category.SubCategories}
        totalVotes={ele.voter_ids.length}
        onClickUi={onDialogClicked}
      />
    );
  })}
  {pollUirenderState === true ? (
    <PollingUi pollClickedData={pollData} />
  ) : (
    ""
  )}
</div>
  )


const featureSection= useSelector((state) => {
  return  state.component.featureSection;
});

  if(featureSection=== 'Analytics')
  {
    renderSection=<Analytics/>
  }
  else if(featureSection=== 'profile')
  {
    renderSection=<Profile/>
  }



  return (
    <div className="seperator">
      <div>
        <Slider />
      </div>
      {renderSection}
    </div>
  );
};

export { PollContainer, OnVote };
