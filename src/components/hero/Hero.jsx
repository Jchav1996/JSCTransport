import { Link } from "react-router-dom";

export function Hero() {
	return (
		<header className="hero-container">
			<div className="hero-content">
				<h1>
					JSC Transport is commited to making
					<br></br>
					your Logistic needs easy and simple
				</h1>
				<Link to="quote" className="hero-cta">Get a Quote Now</Link>
			</div>
			<img className="hero-logo" src="/jsclogo.jpg" />
		</header>
	);
}
