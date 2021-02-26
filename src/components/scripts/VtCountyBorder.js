import { useState } from "react";
import { useEffect } from "react";

function CountyCheck(props) {
  const [data, setData] = useState("");

  useEffect(() => {
    if (data) {
      return false;
    } else {
      fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${props.latRandom}&lon=${props.longRandom}&format=json`
      )
        .then((res) => res.json())
        .then((jsonObj) => {
          console.log(jsonObj);
          setData(jsonObj);
        });
    }
  });
  return (
    <p>
      {data && data.address.city} {data && data.address.village} {data && data.address.hamlet} {data && data.address.county} {data && data.lat} {data && data.lon}
    </p>
  );
}
export default CountyCheck;
