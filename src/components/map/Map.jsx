/* eslint-disable react/prop-types */
import GoogleMapReact from "google-map-react";
import "./map.css";
import { Draggable } from "leaflet";

const apiKey = import.meta.env.VITE_GOOGLE_API;

export const Map = () => {
	const location = {
		address: "2600 Northwest 69th Street, Miami, FL",
		lat: 25.836820,
		lon: -80.240350,
		zoomLevel: 20,
	};
	


	return (
		<div className="map">
			<h2 className="map-h2">Come Visit Us</h2>

			<div className="google-map">
				<GoogleMapReact
					options={{Draggable: false, zoomControlOptions: false}}
					bootstrapURLKeys={{ key: apiKey }}
					defaultCenter={[location.lat, location.lon]}
					defaultZoom={location.zoomLevel}>
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
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="40"
			height="40"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="pin-icon">
			<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
			<circle cx="12" cy="10" r="3" />
		</svg>
		<p className="pin-text">{text}</p>
	</div>
);
