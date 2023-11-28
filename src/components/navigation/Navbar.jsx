import { Link, Outlet } from "react-router-dom";
import "./navbar.css";

export function Navbar() {
  return (
    <>
      <nav>
        <div className="navbar">
          <h2> JSC Transport Enterprises Corp.</h2>
          <Link to="/">Home</Link>
          <Link to="contact">Contact</Link>
          <Link to="about">About Us</Link>
          <Link to="quote">Quote</Link>
        </div>
      </nav>
    </>
  );
}
