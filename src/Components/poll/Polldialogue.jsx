import React from "react";
import "./Polldialogue.css";
function Polldialogue({ Questions, Catogries, totalVotes }) {
  return (
    <div className="Polldialogue--Container ">
      <p className="Polldialogue--questionPolldialogue--flex" id="Question">
        <span className="Polldialogue--span">Question : </span><span className="Polldialogue--span-ans"> {Questions}</span>
      </p>
      <p className="Polldialogue--CategoryPolldialogue--flex" id="category">
      <span className="Polldialogue--span" >category :</span><span className="Polldialogue--span-ans"> {Catogries.map((ele)=>{ return ele+"  "})}</span>
      </p>
      <p className="Polldialogue--TotvotesPolldialogue--flex"><span className="Polldialogue--span">Total-Votes :</span> <span className="Polldialogue--span-ans"> {totalVotes}</span></p>
    </div>
  );
}

export default Polldialogue;
