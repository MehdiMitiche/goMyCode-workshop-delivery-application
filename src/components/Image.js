import React from "react";
import image from "../assets/sky.png";

const Image = () => {
  return (
    <div className="image-contener">
      <img src={image} alt="weather-img" width="250" height="250" />
    </div>
  );
};
export default Image;
