import React from "react";

const WeatherDetail = ({ wind, temp, weather, city }) => {
  return (
    <div className="weather-detail">
      <div className="city">{city}</div>

      <div className="row">
        <div className="info-content">
          <div className="info-title">temperateur </div>
          <div className="info">{`${Math.floor(temp - 273.15)} °`}</div>
        </div>
        <div className="info-content">
          <div className="info-title">Weather </div>
          <div className="info">{weather}</div>
        </div>
        <div className="info-content">
          <div className="info-title">Wind </div>
          <div className="info">{`${wind} Km/h`}</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetail;
