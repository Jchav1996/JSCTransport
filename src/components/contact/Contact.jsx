import "./contact.css";
import { Map } from "../map/Map";
import { Team } from "./team";

export function CONTACT() {
  return (
    <div className="page">
<div className="contact">
      <Map />
      <div className="right">
      <h1>Where to find us</h1>
      <p>J.S.C Transport Enterprises Corp.</p>
      <p>Address:</p> 
       <p>2600 Northwest 69th Street, Miami, FL 33147</p>
      <p>Send us an Email</p> 
      <a href="mailto:jsctransportec@gmail.com">JscTransportEc@gmail.com</a>
      <br></br>
      <p>Call us at <a href="tel:7864547344">(786) 454-7344</a></p>
      </div>
      </div>
      <div className="team">
      <Team />
      </div>

    </div>
  );
}
