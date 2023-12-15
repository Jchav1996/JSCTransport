/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About } from "./components/about/About.jsx";
import { Quote } from "./components/quote/Quote.jsx";
import { CONTACT } from "./components/contact/Contact.jsx";
import { Root } from "./Root.jsx";
import { AuthProvider } from "./lib/context/auth-context.jsx";
import RequireAuth from "./lib/require-auth.jsx";
import { PrivateApp } from "./PrivateApp.jsx";
import Auth from "./components/Auth/Auth.jsx";
import { Dashboard } from "./components/private/Dashboard.jsx";

// import { Map } from './components/map/Map.jsx';

const withAuthProvider = (Component, requireAuth = false) => {
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
		element: withAuthProvider(Root),
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
				path: "/auth",
				element: <Auth />,
			},
		],
	},
	{
		path: "/dashboard",
		element: withAuthProvider(PrivateApp, true),
		// true when private, nothing when public
		children: [
			{
				path: "/dashboard",
				element: <Dashboard />,
			},
			{
				path: "/dashboard/quote",
				element: <Quote />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
