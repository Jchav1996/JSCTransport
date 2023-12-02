import React from "react";
import GoogleMapReact from "google-map-react";
import "./map.css";

const apiKey = import.meta.env.VITE_GOOGLE_API;

export const Map = () => {
  const location = {
    address: "2600 Northwest 69th Street, Miami, FL",
    lat: 25.8379059,
    lon: -80.204855,
    zoomLevel: 14
  };

  return (
    <div className="map">
      <h2 className="map-h2">Come Visit Us At Our Campus</h2>

      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: apiKey }}
          defaultCenter={[location.lat, location.lon]}
          defaultZoom={location.zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lon}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};
const LocationPin = ({ text }) => (
  <div className="pin">
    {/* <Icon icon={locationIcon} className="pin-icon" /> */}

    <p className="pin-text">{text}</p>
  </div>
);
