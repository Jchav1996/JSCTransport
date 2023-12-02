import "./contact.css";
import { MapContainer, Popup, Marker, TileLayer } from "react-leaflet";
import { Map } from "../map/Map";
export function CONTACT() {
  const pinpoint = [25.8379059, -80.204855]
  return (
    <div className="contact">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      
      <Map />
      <h1>Hello Contact</h1>
    </div>
  );
}
