import "./contact.css";
import { Map } from "../map/Map";
import { Team } from "./Team";

export function CONTACT() {
	return (
		<div className="page">
			<h1 id="visit">Come Visit Us</h1>
			<div className="contact">
				<Map />
				<div className="right">
					<h1>Where to find us</h1>
					<p>J.S.C Transport Enterprises Corp.</p>
					<p>Address:</p>
					<p>2600 Northwest 69th Street, Miami, FL 33147</p>
					<p>Send us an Email</p>
					<a href="mailto:jsctransportec@gmail.com">
						JscTransportEc@gmail.com
					</a>
					<br></br>
					<p>
						Call us at <a href="tel:7864547344">(786)454-6758</a>
					</p>
				</div>
			</div>
			<h1 id="meet">Meet the Team</h1>
			<Team />
		</div>
	);
}
