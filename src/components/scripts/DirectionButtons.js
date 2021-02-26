
// buttons that helps player to move in different directions

function DirectionButtons(){


return(
    <>
    <button onClick={props.north}{scoreChange}>North</button>
    <button onClick={props.south}{scoreChange}>South</button>
    <button onClick={props.east}{scoreChange}>East</button>
    <button onClick={props.west}{scoreChange}>West</button>
    <button onClick={props.startPosition}{scoreChange}>Home</button>
    </>
)



}

export default DirectionButtons

//const north={lat:setCenter.lat+0.002,long:setCenter.long}
//const south={lat:setCenter.lat-0.002,long:setCenter.long}
//const east={lat:setCenter.lat,long:setCenter.long+0.002}
//const west={lat:setCenter.lat,long:setCenter.long-0.002}
//[coords[1], coords[0]
//let lat=?
//let long=?

//mapPosition: {
//         lat: lat + 0.002,
//         lng: lng + 0.002, 
//       }