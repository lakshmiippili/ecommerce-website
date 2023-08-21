import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import MainNavigation from "./components/layouts/MainNavigation";
import AboutUs from "./components/layouts/AboutUs";
import Products from "./components/products/Products";
import Home from "./components/layouts/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainNavigation />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/store",
        element: <Products />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
