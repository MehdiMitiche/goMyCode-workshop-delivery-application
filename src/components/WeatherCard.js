import React from "react";
import Search from "./Search";
import Image from "./Image";
import WeatherDetail from "./Weatherdetail";

const WeatherCard = (props) => {
  return (
    <div className="weather">
      <Search fetch={props.fetch} update={props.update} />
      <Image />
      {props.err ? (
        <div className="msg">{props.err}</div>
      ) : (
        <>
          {props.data ? (
            <WeatherDetail
              temp={props.data.main.temp}
              city={props.data.name}
              wind={props.data.wind.speed}
              weather={props.data.weather[0].main}
            />
          ) : (
            <div className="msg">Search for a city to display weather</div>
          )}
        </>
      )}
    </div>
  );
};
export default WeatherCard;
