import "./about.css";

import HeroSlideShow from "../HeroSlideShow/HeroSlideShow.jsx";


export function About() {

	return (

		<div className="about">

			<h3>What is JSC Transport?</h3>

			<img id="logo" src="/jsclogo.jpg" alt="JSC Transport Logo" />

			<div className="content">

				<p>

					J.S.C Transport Enterprises Corp. is a founded and operated trucking company based in Miami by family in the growth. We are motivated, highly skilled and honest local trucking company that charges the lowest percentage dispatch rate in South Florida. Our main goal is to ensure that we provide the most trustful, safest and convenient service all around, our drivers are guaranteed the best rates on the market thanks to our primary brokers and dedicated lanes, we work hard for you to make sure our partnership grows solid and strong. Integrity, efficiency, and teamwork are at the heart of what we do, and you will find that attitude in our office staff.

				</p>

				<HeroSlideShow></HeroSlideShow>

			</div>

		</div>

	);

}