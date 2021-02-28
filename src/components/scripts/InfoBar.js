

function InfoBar(props) {
 return (
       <div>
     <div>Score:{props.score}</div>
     <div>County: {props.county}</div>
      <div>Town: {props.city} {props.village} {props.hamlet} {props.town} </div>
      <div>Latitude: {props.latitude} </div>
      <div>Longitude: {props.longitude}</div>

      </div>
    )
}

export default InfoBar;
