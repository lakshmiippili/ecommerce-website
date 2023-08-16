import React,{useState} from "react";
import Cart from "./components/Cart/Cart";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Navigation from "./components/layouts/Navigation";
import AboutUs from "./components/layouts/AboutUs";
import Products from "./components/products/Products";
function App() {
  const router = createBrowserRouter([{
    path:'/',
    element:<Navigation/>,
    children:[
      {
        path: "/",
        element: <AboutUs/>
      },
      {
        path:'/about',
        element:<AboutUs/>
      },
      {
        path: "/store",
        element: <Products/>
      },
    ]
  }])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
