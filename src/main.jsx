import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ABOUT } from './components/navigation/about/About.jsx';
import { Navbar } from './components/navigation/Navbar.jsx';
import { Hero } from './components/navigation/hero/Hero.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Navbar/>,
    children:[
      {
        path: "/home",
        element: <Hero /> 
    },
  {
    path: "/about",
    element: <ABOUT />
  }]
    
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
