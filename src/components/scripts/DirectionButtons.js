import { useState } from 'react'


// buttons that helps player to move in different directions

function DirectionButtons({moveNorth, moveSouth, moveEast, moveWest, returnToStart, buttonState}){


return(
    <>
    <button onClick={moveNorth} disabled={!buttonState}>North</button>
    <button onClick={moveSouth} disabled={!buttonState}>South</button>
    <button onClick={moveEast} disabled={!buttonState}>East</button>
    <button onClick={moveWest} disabled={!buttonState}>West</button>
    <button onClick={returnToStart} disabled={!buttonState}>Return</button>
    </>
)



}

export default DirectionButtons
