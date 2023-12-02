import HeroSlideShow from "../HeroSlideShow/HeroSlideShow";
import "./about.css";



export function About() {

  

  return (
    <div className="about">
      <title>About</title>
      <br></br>
      <br></br>
      <br></br>

      <img id="logo" src="/jsclogo.jpg"/>
      
      <div className="content">
        <h3>What is JSC Transport?</h3>
        <p>
          J.S.C Transport Enterprises Corp. is a founded and operated trucking company based in Miami by family in
          the growth. We are motivated, highly skilled and honest local trucking
          company that charges the lowest percentage dispatch rate in South
          Florida. Our main goal is to ensure that we provide the most trustful,
          safest and convenient service all around, our drivers are guaranteed
          the best rates on the market thanks to our primary brokers and
          dedicated lanes, we work hard for you to make sure our partnership
          grows solid and strong. Integrity, efficiency, and teamwork are at the
          heart of what we do, and you will find that attitude in our office
          staff.
        </p>
        <HeroSlideShow></HeroSlideShow>
      </div>
    </div>
  );
}
