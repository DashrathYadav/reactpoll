import React from "react";
import "./Polldialogue.css";
function Polldialogue({id,Questions, Catogries, totalVotes ,onClickUi}) {

  const dialogClick =()=>{
      onClickUi(id);
  }
  console.log(Catogries)

  return (
    <div className="Polldialogue--Container " onClick={dialogClick}>
      <p className="Polldialogue--questionPolldialogue--flex" id="Question">
        <span className="Polldialogue--span">Question : </span><span className="Polldialogue--span-ans"> {Questions}</span>
      </p>
      <p className="Polldialogue--CategoryPolldialogue--flex" id="category">
      <span className="Polldialogue--span" >Sub category :</span><span className="Polldialogue--span-ans"> {Catogries.map((ele)=>{ return ele.text+"  "})}</span>
      </p>
      <p className="Polldialogue--TotvotesPolldialogue--flex"><span className="Polldialogue--span">Total-Votes :</span> <span className="Polldialogue--span-ans"> {totalVotes}</span></p>
    </div>
  );
}

export default Polldialogue;
