import { Link } from "react-router-dom";
import "./navbar.css";

export function Navbar() {
	return (
		<>
			<nav>
				<div className="navbar">
					<h2> JSC Transport Enterprises Corp.</h2>
					<Link to="/">Home</Link>
					<Link to="contact">Contact</Link>
					<a href="#about">About Us</a>
					<Link to="quote">Quote</Link>
				</div>
			</nav>
		</>
	);
}
