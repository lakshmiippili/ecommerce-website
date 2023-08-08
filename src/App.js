import React from "react";

import "./App.css";
import Products from "./components/products/Products";
import Header from "./components/layouts/Header";

function App() {
  return (
    <React.Fragment>
      <div className="app">
        <Header/>
      </div>
      <div><h1 align='center'>The Generics</h1></div>
      <div>
        <Products />
      </div>
    </React.Fragment>
  );
}

export default App;
