/*import { useState } from "react";

import Map from "./Map";

import borderData from "./border";

import leafletPip from "leaflet-pip";
import L from "leaflet";


  function RandomStart() {

  const [center, setCenter] = useState([43.88, -72.7317]);
  const [zoom, setZoom] = useState(8);
  const [latRandom, setLatRandom] = useState(43.88);
  const [longRandom, setLongRandom] = useState(-72.7317);



  //start by defining variables for max and min long and lat
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

 console.log(layerLength);
  }
  setLatRandom(latRandGen);
  setLongRandom(longRandGen);

  setCenter([latRandGen, longRandGen]);
  

  console.log('ictr' +center);
  console.log(setLatRandom)
  console.log('ilat' +latRandom)
  setZoom(18);
  console.log(zoom);

  return(
<Map center={center} zoom={zoom} />

  )
  }
export default RandomStart
*/