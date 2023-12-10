import { Login } from "./Login";
import "./page.css"

export function Page() {
  return (
    <div className="log">
        <img className="logpic" src="/jsclogo.jpg"/>
      <Login />
    </div>
  );
}
