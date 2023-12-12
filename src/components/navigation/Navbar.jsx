import { Link } from "react-router-dom";
import "./navbar.css";
import { HashLink } from "react-router-hash-link";

export function Navbar() {
	return (
		<>
			<nav>
				<div className="navbar">
					<h2> JSC Transport Enterprises Corp.</h2>
					<Link to="/">Home</Link>
					<Link to="contact">Contact</Link>
					<HashLink to="/#about">About Us</HashLink>
					<Link to="quote">Quote</Link>
					<Link to="login">Login</Link>
				</div>
			</nav>
		</>
	);
}