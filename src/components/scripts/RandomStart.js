import borderData from './border'
import leafletPip from 'leaflet-pip'
import L from "leaflet"



function RandomStart(){
    
    //start by definig variables for max and min long and lat
    const vtMinLat = 42.7289
    const vtMaxLat = 45.0153
    const vtMinLong= -73.4381
    const vtMaxLong= -71.4949

let vtBorderData=L.geoJSON(borderData)

let latRandom= (Math.random()*(vtMaxLat-vtMinLat)) + vtMinLat;
let longRandom= (Math.random()*(vtMaxLong-vtMinLong)) + vtMinLong;



const layerLength=leafletPip.pointInLayer([longRandom,latRandom],vtBorderData)
if(layerLength){
    return {lat:latRandom, long:longRandom}
}else{
    return layerLength
}


}

export default RandomStart 