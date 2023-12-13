import { Link } from "react-router-dom";
import "./navbar.css";
import { HashLink } from "react-router-hash-link";
import { useContext } from "react";
import { AuthContext } from "../../lib/context/auth-context";
import { SignOutUser } from "../../lib/firebase";

export function Navbar() {
	const { currentUser } = useContext(AuthContext);

	return (
		<>
			<nav>
				<div className="navbar">
					<h2> JSC Transport Enterprises Corp.</h2>
					<Link to="/">Home</Link>
					<Link to="contact">Contact</Link>
					<HashLink to="/#about">About</HashLink>
					<Link to="quote">Quote</Link>
					{currentUser ? (
						<button onClick={SignOutUser}>Logout</button>
					) : (
						<Link to="auth">Login</Link>
					)}
				</div>
			</nav>
		</>
	);
}
