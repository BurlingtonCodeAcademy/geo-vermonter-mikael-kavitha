import {
  MapContainer,
  TileLayer,
  Polygon,
  Marker,
  Polyline,
} from "react-leaflet";
import "./App.css";
import { useState } from "react";
//import HandleClick from "./components/scripts/GameButtons";
import Map from "./components/scripts/Map";
//import RandomStart from "./components/scripts/RandomStart"
import borderData from "./components/scripts/border";
import leafletPip from "leaflet-pip";
import L from "leaflet";

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
    console.log(RandomStart)
    
    console.log(RandomStart)
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
}*/

function App() {
  const [center, setCenter] = useState([43.88, -72.7317]);
  const [zoom, setZoom] = useState(8);
  
  function RandomStart() {
    //start by definig variables for max and min long and lat
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

  return (
    <>
      <Map center={center} zoom={zoom} />
    
      <button onClick={RandomStart}>Start a Game</button>
    </>
  );
}

export default App;
