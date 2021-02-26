import { MapContainer, TileLayer, Polygon, Marker, Polyline } from "react-leaflet";
import borderData from './border'
import leafletPip from 'leaflet-pip'
import L from "leaflet"
import { useState } from 'react'
import Map from './Map';


 
// function RandomStarter() {
    //  const[center, setCenter] = useState(["", ""])
    //  const[zoom, setZoom] = useState("")

    
function RandomStart(props){

    // const [center, setCenter] = useState([43.88, -72.7317])
    // const [zoom, setZoom] = useState(8)
   
    
    
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


export default RandomStart 