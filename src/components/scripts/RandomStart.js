/*import borderData from './border'
import leafletPip from 'leaflet-pip'
import L from "leaflet"*/

/*import { useState } from "react"; 

import {
    MapContainer,
    TileLayer,
    Polygon,
    Marker,
    Polyline,
  } from "react-leaflet";
import Map from './Map'
import leafletPip from "leaflet-pip";
import L from "leaflet";
import borderData from './border'

 
function RandomStart() {
    //start by definig variables for max and min long and lat

    const [center, setCenter] = useState([43.88, -72.7317]);
    const [zoom, setZoom] = useState(8);
    
    let layerLength = 0;
    const vtMinLat = 42.730315121762715;
    const vtMaxLat = 45.00706691759828;
    const vtMinLong = -73.42494466485307;
    const vtMaxLong = -71.510225353531;
    let latRandom;
    let longRandom;
    let vtBorderData = L.geoJSON(borderData);
    console.log(vtBorderData);

    while (layerLength !== 1) {
      latRandom = Math.random() * (vtMaxLat - vtMinLat) + vtMinLat;
      longRandom = Math.random() * (vtMaxLong - vtMinLong) + vtMinLong;

      console.log(latRandom);
      console.log(longRandom);

      layerLength = leafletPip.pointInLayer(
        [longRandom, latRandom],
        vtBorderData
      ).length;
      console.log(layerLength);
    }
    setCenter([latRandom, longRandom]);
    setZoom(18);
    console.log(zoom);
    return (
      <div>
        <Map center={center} zoom={zoom} />
        
      </div>
    );
  }

 export default RandomStart 
/*
// function RandomStarter() {
    //  const[center, setCenter] = useState(["", ""])
    //  const[zoom, setZoom] = useState("")

function RandomStart(){
    const [center, setCenter] = useState([43.88, -72.7317]);
    const[zoom,setZoom]=useState(8)
    //start by definig variables for max and min long and lat
    const vtMinLat = 42.7289
    const vtMaxLat = 45.0153
    const vtMinLong = -73.4381
    const vtMaxLong = -71.4949

let vtBorderData = L.geoJSON(borderData)

let latRandom = (Math.random()*(vtMaxLat-vtMinLat)) + vtMinLat;
let longRandom = (Math.random()*(vtMaxLong-vtMinLong)) + vtMinLong;

console.log(latRandom)
console.log(longRandom)

// const layerLength = leafletPip.pointInLayer([longRandom,latRandom],vtBorderData, true)
// console.log(layerLength)
// if(layerLength){
//     return {lat:latRandom, long:longRandom}
// }else{
//     return RandomStart()
// }

const layerLength=leafletPip.pointInLayer([longRandom,latRandom],vtBorderData),true
if(layerLength){
    return {lat:latRandom, long:longRandom}
}else{
    return RandomStart()
}


    // setCenter(()=> { 
    //     center = [longRandom, latRandom]
    // })
    // setZoom(() => {
    //  zoom = 18 })

 
return (
    <div> 
    <Map center={props.center} />
    <Map zoom={props.zoom} />
    </div>
)

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