import {
  MapContainer,
  TileLayer,
  Polygon,
  Marker,
  Polyline,
} from "react-leaflet";
import "./App.css";
import { useState } from "react";
import HandleClick from "./components/scripts/GameButtons";
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
  const [guess, setGuess] = useState(false);
  const [quit, setQuit] = useState(false);
  const [buttonState, setButtonState] = useState(false);

  function RandomStart() {
    //start by definig variables for max and min long and lat
    let layerLength = 0;
    const vtMinLat = 42.730315121762715;
    const vtMaxLat = 45.00706691759828;
    const vtMinLong = -73.42494466485307;
    const vtMaxLong = -71.510225353531;
    let latRandGen;
    let longRandGen;
    let vtBorderData = L.geoJSON(borderData);
    console.log(vtBorderData);
    while (layerLength !== 1) {
      latRandGen = Math.random() * (vtMaxLat - vtMinLat) + vtMinLat;

      longRandGen = Math.random() * (vtMaxLong - vtMinLong) + vtMinLong;

      console.log(latRandGen);
      console.log(longRandGen);

      layerLength = leafletPip.pointInLayer(
        [longRandGen, latRandGen],
        vtBorderData
      ).length;

      //  console.log(latRandom);
      // console.log(longRandom);
      console.log(layerLength);
    }
    setLatRandom(latRandGen);
    setLongRandom(longRandGen);
    setCenter([latRandGen, longRandGen]);

    console.log(center);
    setZoom(18);
    console.log(zoom);
    return (
      <div>
        <Map center={center} zoom={zoom} />
      </div>
    );
  }
  //places the map marker in a random spot as well as diables start button and enables guess and quit buttons
  function startClickHandler() {
    setStart(false);
    guessClickHandler(true);
    quitClickHandler(true);
    setButtonState(!buttonState);
    RandomStart();
  }

  function guessClickHandler() {
    setButtonState(!buttonState);
  }

  function quitClickHandler() {
    setButtonState(!buttonState);
  }

  return (
    <>
      <InfoBar />
      <Map center={center} zoom={zoom} />
      <HandleClick
        startClickHandler={startClickHandler}
        buttonState={buttonState}
        quitClickHandler={quitClickHandler}
      />
      <Counties />
      <CountyCheck latRandom={latRandom} longRandom={longRandom} />
    </>
  );
}

export default App;
