import {
  MapContainer,
  TileLayer,
  Polygon,
  Marker,
  Polyline,
} from "react-leaflet";
import "./App.css";
import { useState } from "react";
import GameButtons from "./components/scripts/GameButtons";
import Map from "./components/scripts/Map";
import Counties from "./components/scripts/Counties";
import borderData from "./components/scripts/border";
import InfoBar from "./components/scripts/InfoBar";
import leafletPip from "leaflet-pip";
import L from "leaflet";
import CountyCheck from "./components/scripts/VtCountyBorder";
// import RandomStart from './components/scripts/RandomStart'

function App() {
  const [center, setCenter] = useState([43.88, -72.7317]);
  const [zoom, setZoom] = useState(8);
  const [latRandom, setLatRandom] = useState(43.88);
  const [longRandom, setLongRandom] = useState(-72.7317);
 

  const [start, setStart] = useState(true);
  //const [guess, setGuess] = useState(false);
  const [quit, setQuit] = useState(false);
  const [buttonState, setButtonState] = useState(false);
  const [guessBox, setGuessBox] = useState(false);

  function RandomStart() {
    //start by defining variables for max and min long and lat
    let layerLength = 0;
    const vtMinLat = 42.730315121762715;
    const vtMaxLat = 45.00706691759828;
    const vtMinLong = -73.42494466485307;
    const vtMaxLong = -71.510225353531;

    let latRandGen;
    let longRandGen;
    let vtBorderData = L.geoJSON(borderData);

    while (layerLength !== 1) {
      latRandGen = Math.random() * (vtMaxLat - vtMinLat) + vtMinLat;
      longRandGen = Math.random() * (vtMaxLong - vtMinLong) + vtMinLong;

      console.log(latRandGen);
      console.log(longRandGen);

      layerLength = leafletPip.pointInLayer(
        [longRandGen, latRandGen],
        vtBorderData
      ).length;

      console.log(layerLength);
    }
    setLatRandom(latRandGen);
    setLongRandom(longRandGen);

    setCenter([latRandGen, longRandGen]);



    setZoom(18);
    console.log(zoom);
  }
  //places the map marker in a random spot as well as disables start button and enables guess and quit buttons
  function startClickHandler() {
    setStart(false);
    //  guessClickHandler(true);
    // quitClickHandler(true);
    setButtonState(!buttonState);
    RandomStart();
    setZoom(18);
  }

  function guessClickHandler() {
    setButtonState(!buttonState);
    setGuessBox(!guessBox);
  }

  function quitClickHandler() {
    setButtonState(!buttonState);
    
    setQuit(true);
    
  }
  return (
    <>
    {!quit && <InfoBar/>}
   
      {quit&& <CountyCheck
        checkQuit={quit}
        latRandom={latRandom}
        longRandom={longRandom}
      />}
      {guessBox && <Counties latRandom={latRandom}
        longRandom={longRandom} guessBox={setGuessBox} />}
      <Map center={center} zoom={zoom} />
      <GameButtons
        startClickHandler={startClickHandler}
        buttonState={buttonState}
        quitClickHandler={quitClickHandler}
        guessClickHandler={guessClickHandler}
      />
    </>
  );
}

export default App;
