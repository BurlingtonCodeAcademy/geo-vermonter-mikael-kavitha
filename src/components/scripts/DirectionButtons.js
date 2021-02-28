import { useState } from 'react'


// buttons that helps player to move in different directions

function DirectionButtons(props){


return(
    <>
    <button onClick={props.moveNorth}>North</button>
    <button onClick={props.moveSouth}>South</button>
    <button onClick={props.moveEast}>East</button>
    <button onClick={props.moveWest}>West</button>
    <button onClick={props.returnToStart}>Return</button>
    </>
)



}

export default DirectionButtons
