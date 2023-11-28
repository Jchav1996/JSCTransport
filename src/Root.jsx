import { Outlet } from "react-router-dom";
import { Navbar } from "./components/navigation/Navbar";

export function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
      <footer>
        <p>Copyright © 2023 All rights reserved</p>
      </footer>
    </>
  );
}
