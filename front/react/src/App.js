import React from "react";
import Header from "./components/Layout/Header";
import SideNav from "./components/Layout/SideNav";
import Slider from "./components/Layout/Slider";

function App() {
  return (
    <div className="App">
      <Header/>
      <SideNav/>
      <Slider/>
    </div>
  );
}

export default App;
