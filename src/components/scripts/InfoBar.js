//Function used to update info bar, displays score, county, town, long, lat
function InfoBar(props) {
  return (
    <div id="info-wrapper">
       <h2 id="info">Information</h2>
      <div>Score:{props.score} </div>
      <div>County: {props.county} </div>
      <div>
        Town: {props.city} {props.village} {props.hamlet} {props.town}{" "}
      </div>
      <div>Latitude: {props.latitude} </div>
      <div>Longitude: {props.longitude} </div>
    </div>
    
  );
}

export default InfoBar;
