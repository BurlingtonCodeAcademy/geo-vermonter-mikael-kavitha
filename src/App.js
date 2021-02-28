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
import DirectionButtons from "./components/scripts/DirectionButtons";
// import RandomStart from './components/scripts/RandomStart'

function App() {
  const [center, setCenter] = useState([43.88, -72.7317]);
  const [zoom, setZoom] = useState(8);
  const [latRandom, setLatRandom] = useState(43.88);
  const [longRandom, setLongRandom] = useState(-72.7317);
  const [score, setScore] = useState(100);
  const [start, setStart] = useState(true);
  //const [guess, setGuess] = useState(false);
  const [quit, setQuit] = useState(false);

  const [buttonState, setButtonState] = useState(false);
  const [guessBox, setGuessBox] = useState(false);

  const [moveNorthCount, setMoveNorthCount] = useState(0);
  const [moveSouthCount, setMoveSouthCount] = useState(0);
  const [moveEastCount, setMoveEastCount] = useState(0);
  const [moveWestCount, setMoveWestCount] = useState(0);

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

    // setZoom(18);
    console.log(zoom);
  }
  //places the map marker in a random spot as well as disables start button and enables guess and quit buttons
  function startClickHandler() {
    setStart(false);
    //  guessClickHandler(true);
    // quitClickHandler(true);
    setButtonState(!buttonState);

    setZoom(zoom + 10);
    RandomStart();
  }

  function guessClickHandler() {
    setGuessBox(!guessBox);
  }

  function quitClickHandler() {
    setButtonState(!buttonState);

    setQuit(true);
  }

  function moveNorth() {
    setMoveNorthCount(moveNorthCount + 1);
    setLatRandom(latRandom + 0.002);
    setCenter([latRandom, longRandom]);
    setScore(score - 1);
  }

  function moveSouth() {
    setMoveSouthCount(moveSouthCount + 1);
    setLatRandom(latRandom - 0.002);
    setCenter([latRandom, longRandom]);
    setScore(score - 1);
  }

  function moveEast() {
    setMoveEastCount(moveEastCount + 1);
    setLongRandom(longRandom + 0.002);
    setCenter([latRandom, longRandom]);
    setScore(score - 1);
  }

  function moveWest() {
    setMoveWestCount(moveWestCount + 1);
    setLongRandom(longRandom - 0.002);
    setCenter([latRandom, longRandom]);
    setScore(score - 1);
  }

  

  // function wrongGuess () {
  //   setScore(score - 10)
  // }

  //console.log(moveWestCount)
  //for some reason return button currently needs to be pressed twice in order to work
  function returnToStart() {
    setLongRandom(longRandom + moveWestCount * 0.002 - moveEastCount * 0.002);
    setLatRandom(latRandom + moveSouthCount * 0.002 - moveNorthCount * 0.002);
    setCenter([latRandom, longRandom]);
    setMoveNorthCount(0);
    setMoveSouthCount(0);
    setMoveWestCount(0);
    setMoveEastCount(0);
  }
  console.log(zoom);

  return (
    <>
      {!quit && !guessBox && (
        <InfoBar
          score={score}
          county={"?"}
          town={"?"}
          latitude={"?"}
          longitude={"?"}
        />
      )}

      {quit && (
        <CountyCheck
          checkQuit={quit}
          latRandom={latRandom}
          longRandom={longRandom}
        />
      )}

      {guessBox && (
        <Counties
        
          score={score}
          guessBox={setGuessBox}
          latRandom={latRandom}
          longRandom={longRandom}
        />
      )}

      <Map center={center} zoom={zoom} />
      <GameButtons
        startClickHandler={startClickHandler}
        buttonState={buttonState}
        quitClickHandler={quitClickHandler}
        guessClickHandler={guessClickHandler}
      />
      <DirectionButtons
        buttonState={buttonState}
        moveNorth={moveNorth}
        moveSouth={moveSouth}
        moveEast={moveEast}
        moveWest={moveWest}
        returnToStart={returnToStart}
      />
    </>
  );
}

export default App;
