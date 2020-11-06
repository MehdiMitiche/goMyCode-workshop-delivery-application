import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import Navbar from "./Components/Navbar";
import DeliverySide from "./Components/DeliverySide";
import ImgSide from "./Components/ImgSide";
import MyRequests from "./Components/MyRequests";
import { Route, Switch } from "react-router-dom";
import Details from "./Components/Details";

function App() {
  return (
    <div>
      <Navbar />
      <div className="main-container">
        <Switch>
          <Route path="/myRequests">
            <MyRequests />
          </Route>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/">
            <DeliverySide />
            <ImgSide />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
