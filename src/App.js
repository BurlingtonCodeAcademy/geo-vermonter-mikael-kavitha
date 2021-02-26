import { MapContainer, TileLayer, Polygon, Marker, Polyline } from "react-leaflet";
import "./App.css";
import { useState } from "react";
import HandleClick from "./components/scripts/GameButtons";
import Map from "./components/scripts/Map";
import RandomStart from "./components/scripts/RandomStart"

function App() {
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
}

export default App;
