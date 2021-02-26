
// buttons that helps player to move in different directions

function DirectionButtons(props){
const[center,setCenter]=useState([43.88, -72.7317])
const[zoom,setZoom]=useState(8)
const[viewCenter,setViewCenter]=useState([43.88, -72.7317])
const[score,setScore]=useState(100)
let scoreChange=setScore(score-1)
let startPosition=setCenter
let longInput=props.long
let latInput=props.lat
return(
    <>
    <button onClick={props.moveNorth}{scoreChange}>North</button>
    <button onClick={props.moveSouth}>South</button>
    <button onClick={props.moveEast}>East</button>
    <button onClick={props.moveWest}>West</button>
    <button onClick={props.startPosition}>Home</button>
    </>
)



}

export default DirectionButtons


//mapPosition: {
//         lat: lat + 0.002,
//         lng: lng + 0.002, 
//       }