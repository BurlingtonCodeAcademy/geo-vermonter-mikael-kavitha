import React from "react";


function HighScore(props) {
  return (
    <div style={{ visibility: props.viewHighScore }} id="highScore-wrapper">
      <div id="high-score-modal">
        <h1>High Score Board</h1>
      </div>
    </div>
  );
};

export default HighScore;