import "./contact.css";
import { MapContainer as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet"

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
      
        <LeafletMap center={pinpoint} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={pinpoint}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
        </LeafletMap>
        <h1>Hello Contact</h1>
    </div>
  );
}
