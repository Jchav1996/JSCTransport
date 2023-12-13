import "./team.css";

export function Team() {
	return (
		<div className="team">
			<div className="column">
				<img src="/president.jpg" alt="President" />
				<p>
					<b>President</b>
          <span>Enrique Chavarria</span>
				</p>
			</div>
			<div className="column">
				<img src="/vp.jpg" alt="President" />
				<p>
					<b>Vice President</b>
          <span>Nayda Chavarria</span>
				</p>
			</div>
			<div className="column">
				<img src="/dispatch.jpg" alt="President" />
				<p>
					<b>Dispatcher</b>
          <span>Jennifer Chavarria</span>
				</p>
			</div>
			<div className="column">
				<img src="/driver.jpg" alt="President" />
				<p>
					<b>Driver</b>
          <span>Jonathan Chavarria</span>
				</p>
			</div>
		</div>
	);
}
