import React from "react";
import "./Polldialogue.css";
function Polldialogue({ Questions, Catogries, totalVotes }) {
  return (
    <div className="Polldialogue--Container Polldialogue--flex">
      <p className="Polldialogue--question Polldialogue--flex" id="Question">
        {" "}
        Question{Questions}
      </p>
      <br></br>
      <p className="Polldialogue--category Polldialogue--flex" id="category">
        category:{Catogries}
      </p>
      <p>Total votes {totalVotes}</p>
    </div>
  );
}

export default Polldialogue;
