import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import WeatherCard from "./components/WeatherCard";
import axios from "axios";

function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState(null);
  const [err, setErr] = useState("");

  const updateInput = (text) => {
    setInput(text);
  };

  const fetchData = async () => {
    setErr("");
    const endpoint = "http://api.openweathermap.org/data/2.5/weather";
    const apiKey = "b7ed116b4ea17b35e683037702056cd8";

    try {
      const response = await axios.get(
        `${endpoint}?q=${input}&appid=${apiKey}`
      );
      setData(response.data);
    } catch (err) {
      setErr("Error fetching Data,Please try again !");
      console.log(err);
    }
  };

  return (
    <div>
      <Navbar title="weather app" />
      <div className="contener">
        <WeatherCard
          err={err}
          data={data}
          fetch={fetchData}
          update={updateInput}
        />
      </div>
    </div>
  );
}

/**
 * Components :
 * -- Navbar
 * -- WeatherCAr
 * -- Searchbar
 * -- Img
 * -- WeatherInfo
 * --
 */

/*
1- Isolate UI from the data
2- Create Layout (Handle all the states error,loading dataEmpty data)
3-handel user Action (Events handling)
4-Fetching (AXIOS)
5-Display Fetched Data 
*/

export default App;
