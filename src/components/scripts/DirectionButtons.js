import { useState } from 'react'


// buttons that helps player to move in different directions

function DirectionButtons({moveNorth, moveSouth, moveEast, moveWest, returnToStart, buttonState}){


return(
    <>
{/* as these buttons are clicked the marker moves N, S, E, W accordingly */}
    <button className="buttonStyle" onClick={moveNorth} disabled={!buttonState}>North</button>
    <button className="buttonStyle" onClick={moveSouth} disabled={!buttonState}>South</button>
    <button className="buttonStyle" onClick={moveEast} disabled={!buttonState}>East</button>
    <button className="buttonStyle" onClick={moveWest} disabled={!buttonState}>West</button>
    <button className="buttonStyle" onClick={returnToStart} disabled={!buttonState}>Return</button>

    </>
)



}

export default DirectionButtons
