import { useState } from "react";
import { useEffect } from "react";

function CountyCheck(props) {
  const [data, setData] = useState("");

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
    <p>
      <div>County: {data && data.address.county}</div>
      <div>Lat: {data && data.lat} </div>
      <div>Lon: {data && data.lon}</div>
    </p>
  );
}
export default CountyCheck;