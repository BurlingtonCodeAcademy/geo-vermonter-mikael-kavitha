/*import borderData from './border'
import leafletPip from 'leaflet-pip'
import L from "leaflet"
import { useState } from "react";


function RandomStart(){
    const [center, setCenter] = useState([43.88, -72.7317]);
    const[zoom,setZoom]=useState(8)
    //start by definig variables for max and min long and lat
    const vtMinLat = 42.7289
    const vtMaxLat = 45.0153
    const vtMinLong= -73.4381
    const vtMaxLong= -71.4949

let vtBorderData=L.geoJSON(borderData)

let latRandom= (Math.random()*(vtMaxLat-vtMinLat)) + vtMinLat;
let longRandom= (Math.random()*(vtMaxLong-vtMinLong)) + vtMinLong;



const layerLength=leafletPip.pointInLayer([longRandom,latRandom],vtBorderData),true
if(layerLength){
    return {lat:latRandom, long:longRandom}
}else{
    return RandomStart()
}


}

export default RandomStart */

/*function App() {
  const [start, setStart] = useState(true);
  const [guess, setGuess] = useState(false);
  const [quit, setQuit] = useState(false);
  const [buttonState, setButtonState] = useState(false);

  function startClickHandler() {
    setStart(false);
    guessClickHandler(true);
    quitClickHandler(true);
    setButtonState(!buttonState);
    
  }

  //enables the guess click after start button is clicked
  function guessClickHandler() {
    setButtonState(!buttonState)
  }

  function quitClickHandler() {
    setButtonState(!buttonState)
  }

  const [center, setCenter] = useState([43.88, -72.7317]);

  return (
    <>
      <Map center={center} />
      <HandleClick
        startClickHandler={startClickHandler}
        guessClickHandler={guessClickHandler}
        quitClickHandler={quitClickHandler}
        buttonState={buttonState}
      />
    </>
  );
}
*/