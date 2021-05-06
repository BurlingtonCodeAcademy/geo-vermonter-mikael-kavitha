


//--Buttons that helps player to move in different directions--//

function DirectionButtons({
  moveNorth,
  moveSouth,
  moveEast,
  moveWest,
  returnToStart,
  buttonState,
}) {
  return (
    <div id="navigation-container">
      <h2 id="navigation">Navigation</h2>
      {/* as these buttons are clicked the marker moves N, S, E, W accordingly */}
      {/* North Button */}
      <div id="movement-buttons">
        <button
          id="north"
          className="move-button"
          onClick={moveNorth}
          disabled={!buttonState}
          alt="up-arrow"
        >
          North
      </button>
        {/* South Button */}
        <button
          id="south"
          className="move-button"
          onClick={moveSouth}
          disabled={!buttonState}
          alt="down-arrow"
        >
          South
      </button>
        {/* East Button */}
        <button
          id="east"
          className="move-button"
          onClick={moveEast}
          disabled={!buttonState}
          alt="right-arrow"
        >
          East
      </button>
        {/* West Button */}
        <button
          id="west"
          className="move-button"
          onClick={moveWest}
          disabled={!buttonState}
          alt="left-arrow"
        >
          West
      </button>
        {/* Return to initial random point button */}
        <button
        id="return"
          className="move-button"
          onClick={returnToStart}
          disabled={!buttonState}
          
        >
          Return
      </button>

      </div>
    </div>
  );
}

export default DirectionButtons;
