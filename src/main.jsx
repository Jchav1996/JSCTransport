/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About } from "./components/about/About.jsx";
import { loader as usersLoader } from "./components/users/loader.js";
// import { User, loader as userLoader } from "./components/Users.jsx";
import { Quote } from "./components/quote/Quote.jsx";
import { CONTACT } from "./components/contact/Contact.jsx";
import { Root } from "./Root.jsx";
import { AuthProvider } from "./lib/context/auth-context.jsx";
import RequireAuth from "./lib/require-auth.jsx";
import { PrivateApp } from "./PrivateApp.jsx";
import { Login } from "./components/Login/Login.jsx";
import { Page } from "./components/Login/Page.jsx";
// import { Map } from './components/map/Map.jsx';

const withAuthProvider = (Component, requireAuth = false,) => {
  return (
    <AuthProvider>
      {requireAuth ? (
        <RequireAuth>
          <Component />
        </RequireAuth>
      ) : (
        <Component />
      )}
    </AuthProvider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/quote",
        element: <Quote />,
      },
      {
        path: "/contact",
        element: <CONTACT />,
      },
      {
        path: "/login",
        element: <Page />,
      },
    ],
  },
  {
    path: "/",
    element: withAuthProvider(App),
  },
  {
    path: "/login",
    element: withAuthProvider(Page) ,
  },
  {
    path: "/private",
    element: withAuthProvider(PrivateApp, true), 
    // true when private, nothing when public
  },
]);
  // {
  //   path: "/users",
  //   element: <Users />,
  //   loader: usersLoader,
  // },

  // {
  //   path: "user/:email",
  //   element: <User />
  //   loader: Loader,
  // },


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
