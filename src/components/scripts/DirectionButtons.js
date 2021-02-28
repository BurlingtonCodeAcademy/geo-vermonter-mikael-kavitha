

import { useState } from "react";
// buttons that helps player to move in different directions

function DirectionButtons(props){
    const[center, setCenter]=useState([43.88, -72.7317]);
    const[score,setScore]=useState([100])
let moveLat=props.latRandom
let moveLong=props.longRandom
    function moveNorth() {
        setCenter([moveLat + 0.002, moveLong]);
        console.log(props.move)
        setScore(props.score - 1);
    }

return(
    <>
    <button id ='move-north' onClick={moveNorth}alt='up-arrow'>North</button>
    
    </>
)



}

export default DirectionButtons
