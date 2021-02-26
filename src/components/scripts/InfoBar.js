import { useState } from "react";

function InfoBar() {
  const [longitude, setLongitude] = useState("?");
  const [latitude, setLatitude] = useState("?");
  const [county, setCounty] = useState("?");
  const [town, setTown] = useState("?");
  return (
    <>
      <div>Longitude:{longitude}, 
      Latitude:{latitude}, 
      County:{county}, 
      Town:{town}, </div>
    </>
  );
}

export default InfoBar;
