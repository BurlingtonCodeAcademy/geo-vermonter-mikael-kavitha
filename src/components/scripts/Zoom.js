import { useMap } from "react-leaflet";
//Functoin used to zoom in on the map after the start button has been click
function MapZoom(props){
const map = useMap();
  map.setView(props.center, props.zoom);
  return null;
}
export default MapZoom








