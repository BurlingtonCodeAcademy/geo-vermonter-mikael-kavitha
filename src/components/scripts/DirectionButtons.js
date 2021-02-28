import { useState } from 'react'


// buttons that helps player to move in different directions

function DirectionButtons({buttonState}, props){


return(
    <>
    <button onClick={props.moveNorth} disabled={!buttonState}>North</button>
    <button onClick={props.moveSouth} disabled={!buttonState}>South</button>
    <button onClick={props.moveEast} disabled={!buttonState}>East</button>
    <button onClick={props.moveWest} disabled={!buttonState}>West</button>
    <button onClick={props.returnToStart} disabled={!buttonState}>Return</button>
    </>
)



}

export default DirectionButtons
