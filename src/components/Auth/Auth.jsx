import "./page.css";
import { Login } from "./Login";
import { Signup } from "./Signup";
import { useState } from "react";

export default function Auth() {
	const [activeTab, setActiveTab] = useState("login");
	return (
		<div className="log">
			<img className="logpic" src="/jsclogo.jpg" />
			{/* simple tabs */}
			<div className="tabs">
				<button
					className={activeTab === "login" ? "active" : ""}
					onClick={() => setActiveTab("login")}
				>
					Login
				</button>
				<button
					className={activeTab === "signup" ? "active" : ""}
					onClick={() => setActiveTab("signup")}
				>
					Sign Up
				</button>
			</div>
			{/* conditional rendering */}
			{activeTab === "login" ? <Login /> : <Signup />}
		</div>
	);
}
