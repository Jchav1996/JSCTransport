import "./contact.css";
import { MapContainer, Popup, Marker, TileLayer } from "react-leaflet";

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
      
<MapContainer center={pinpoint} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={pinpoint}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>,
      <h1>Hello Contact</h1>
    </div>
  );
}
