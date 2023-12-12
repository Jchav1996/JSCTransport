import "./team.css"


export function Team() {
    return (
      <div className="team">
        <div className="column">
        <img src="/president.jpg" alt="President" />
        <p><b>President</b></p>
        <p>Enrique Chavarria</p>
        </div>
        <br></br>
        <div className="column2">
        <img src="/vp.jpg" alt="President" />
        <p><b>Vice President</b></p>
        <p>Nayda Chavarria</p>
        </div>
        <br></br>
        <div className="column3">
        <img src="/dispatch.jpg" alt="President" />
        <p><b>Dispatcher</b></p>
        <p>Jennifer Chavarria</p>
        </div>
        <br></br>
        <div className="column4">
        <img src="/driver.jpg" alt="President" />
        <p><b>Driver</b></p>
        <p>Jonathan Chavarria</p>
        </div>
        </div>
    );
}