/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About } from "./components/navigation/about/About.jsx";
import { Navbar } from "./components/navigation/Navbar.jsx";
import { Hero } from "./components/navigation/hero/Hero.jsx";
import {
  Users,
  loader as usersLoader,
} from "./components/navigation/users/Users.jsx";
// import { User, loader as userLoader } from "./components/Users.jsx";
import { Quote } from "./components/navigation/quote/Quote.jsx";
import { CONTACT } from "./components/navigation/contact/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/home",
        element: <Hero />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/quote",
        element: <Quote />,
      },
      {
        path: "/contact",
        element: <CONTACT />,
      },
    ],
  },
  {
    path: "/users",
    element: <Users />,
    loader: usersLoader,
  },

  // {
  //   path: "user/:email",
  //   element: <User />
  //   loader: Loader,
  // },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
