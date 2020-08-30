import React from "react";


const Result = ({name,score, playAgain}) => (
  <div className="score-board">
   
    <div className="score"><center> {name}    scored {score} / 10 correct answers!</center></div>
    
    <button className="playBtn" onClick={playAgain}>
      Play again!
    </button>
    
  </div>
  
  
  
);


export default Result;
