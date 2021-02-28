import {
  MapContainer,
  TileLayer,
  Polygon,
  Marker,
  Polyline,
} from "react-leaflet";
import "./styles/App.css";
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
import NavBar from "./components/scripts/NavBar";

function App() {
  //Variables for altering positon of map marker
  const [center, setCenter] = useState([43.88, -72.7317]);
  const [zoom, setZoom] = useState(8);
  const [latRandom, setLatRandom] = useState(43.88);
  const [longRandom, setLongRandom] = useState(-72.7317);
  //General game variables, start, quit and score
  const [score, setScore] = useState(100);
  const [start, setStart] = useState(true);
  //const [guess, setGuess] = useState(false);
  const [quit, setQuit] = useState(false);
  //Button State enables game and directional buttons after start button has been click
  const [buttonState, setButtonState] = useState(false);
  const [guessBox, setGuessBox] = useState(false);
  //Variables for moving the marker N, S, E W
  const [moveNorthCount, setMoveNorthCount] = useState(0);
  const [moveSouthCount, setMoveSouthCount] = useState(0);
  const [moveEastCount, setMoveEastCount] = useState(0);
  const [moveWestCount, setMoveWestCount] = useState(0);

  const [movePath, setMovePath] = useState([[center[0], center[1]], []]);
  //Random start function places marker in a random location within VT state borders
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
    //loop ensures marker will be within state border
    while (layerLength !== 1) {
      //Generates random lattitude and longittude points
      latRandGen = Math.random() * (vtMaxLat - vtMinLat) + vtMinLat;
      longRandGen = Math.random() * (vtMaxLong - vtMinLong) + vtMinLong;

      console.log(latRandGen);
      console.log(longRandGen);

      layerLength = leafletPip.pointInLayer(
        [longRandGen, latRandGen],
        vtBorderData
      ).length;
    }
    //assigns random points to our latitude and longitude variables
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
  //triggers the guess modal box to appear
  function guessClickHandler() {
    setGuessBox(!guessBox);
  }
  //Displays the players location and informs them of the county and town the marker has been placed in
  function quitClickHandler() {
    setButtonState(!buttonState);
    setQuit(true);
  }

  //function that reurns player to the intial random spot, for some reason has a slight bug and needs to be pressed twice
  function returnToStart() {
    // setLongRandom(longRandom + moveWestCount * 0.002 - moveEastCount * 0.002);
    // setLatRandom(latRandom + moveSouthCount * 0.002 - moveNorthCount * 0.002);
    setCenter([
      latRandom + moveSouthCount * 0.002 - moveNorthCount * 0.002,
      longRandom + moveWestCount * 0.002 - moveEastCount * 0.002,
    ]);
    setMoveNorthCount(0);
    setMoveSouthCount(0);
    setMoveWestCount(0);
    setMoveEastCount(0);
  }
  //function to move marker north when north button is pressed, for some reason buttons must be pressed twice before the changes are made
  function moveNorth() {
    setMoveNorthCount(moveNorthCount + 1);
    setLatRandom(latRandom + 0.002);
    setCenter([latRandom, longRandom]);
    setScore(score - 1);
  }
  //function to marker south when south button is pressed

  function moveSouth() {
    setMoveSouthCount(moveSouthCount + 1);
    setLatRandom(latRandom - 0.002);
    setCenter([latRandom, longRandom]);
    setScore(score - 1);
  }
  //function to move marker east when east button is pressed
  function moveEast() {
    setMoveEastCount(moveEastCount + 1);
    setLongRandom(longRandom + 0.002);
    setCenter([latRandom, longRandom]);
    setScore(score - 1);
  }
  //function to move marker west when west button is pressed
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

  console.log(zoom);
  //JSX html
  return (
    //App div for CSS styling
    <div className="App">
      {/* NavBar, just displaying the header at the moment */}
      <NavBar />
      {/* function for fetching geographic data from nominatim */}
      {quit && (
        <CountyCheck
          checkQuit={quit}
          latRandom={latRandom}
          longRandom={longRandom}
        />
      )}

      <div className="MapInfoBarWrap">
        <div className="directionButtons">
          {/* Directional buttons for moving marker N, S, E, W */}
          <DirectionButtons
            buttonState={buttonState}
            moveNorth={moveNorth}
            moveSouth={moveSouth}
            moveEast={moveEast}
            moveWest={moveWest}
            returnToStart={returnToStart}
            movePath={movePath}
            setMovePath={setMovePath}
          />
        </div>
        {/* Map from the starter project provided by git repository */}
        <Map center={center} zoom={zoom} />

        {/* guessBox modal */}
        {guessBox && (
          <Counties
            score={score}
            guessBox={setGuessBox}
            latRandom={latRandom}
            longRandom={longRandom}
          />
        )}
        {/* InforBar that displays score, county, town, lat long */}
        {!quit && !guessBox && (
          <InfoBar
            score={score}
            county={"?"}
            town={"?"}
            latitude={"?"}
            longitude={"?"}
          />
        )}
      </div>
      <div className="gameButtonWrap">
        {/* Game buttons, start, quit, guess */}
        <GameButtons
          startClickHandler={startClickHandler}
          buttonState={buttonState}
          quitClickHandler={quitClickHandler}
          guessClickHandler={guessClickHandler}
        />
      </div>
    </div>
  );
}

export default App;
