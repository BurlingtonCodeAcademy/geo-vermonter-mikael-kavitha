import { useMap } from "react-leaflet";

function MapZoom(props){
const map = useMap();
  map.setView(props.center, props.zoom);
  return null;
}
export default MapZoom








