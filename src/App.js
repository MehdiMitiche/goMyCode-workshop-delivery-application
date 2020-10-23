import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import Navbar from "./Components/Navbar";
import DeliverySide from "./Components/DeliverySide";
import ImgSide from "./Components/ImgSide";

function App() {
  return (
    <div>
      <Navbar />
      <div className="main-container">
        <DeliverySide />
        <ImgSide />
      </div>
    </div>
  );
}

export default App;
