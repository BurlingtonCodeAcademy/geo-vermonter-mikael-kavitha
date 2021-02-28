import { useState } from "react";
import { useEffect } from "react";
import InfoBar from './InfoBar'
function CountyCheck(props) {
  const [data, setData] = useState();
 
  useEffect(() => {
    if (data) {
      return false;
    } 
    else {
      if(props.checkQuit)
      {
      fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${props.latRandom}&lon=${props.longRandom}&format=json` 
      )
        .then((res) => res.json())
        .then((jsonObj) => {
          console.log(jsonObj);
          setData(jsonObj);
        });
      }
      else {
        return false
      }
    }
  });
  //City: {data && data.address.city} Village: {data && data.address.village} 
  //Hamlet: {data && data.address.hamlet} 
  return (
    <InfoBar 
  
    county={data && data.address.county}
    town={data && data.address.town} 
    latitude={data && data.lon}
    longitude= {data && data.lon}/>
  );
}
export default CountyCheck;
/*<div>
      <div>County: {data && data.address.county}</div>
      <div>Town: {data && data.address.city} {data && data.address.village} {data && data.address.hamlet} {data && data.address.town} </div>
      <div>Latitude: {data && data.lat} </div>
      <div>Longitude: {data && data.lon}</div>
      </div>*/