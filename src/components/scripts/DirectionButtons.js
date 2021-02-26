
// buttons that helps player to move in different directions

function DirectionButtons(props){


return(
    <>
    <button onClick={props.DirectionButtons}{scoreChange}>North</button>
    <button onClick={props.DirectionButtons}>South</button>
    <button onClick={props.DirectionButtons}>East</button>
    <button onClick={props.DirectionButtons}>West</button>
    <button onClick={props.startPosition}>Home</button>
    </>
)



}

export default DirectionButtons


//mapPosition: {
//         lat: lat + 0.002,
//         lng: lng + 0.002, 
//       }