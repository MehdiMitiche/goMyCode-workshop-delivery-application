import React from "react";
import "./vehiculeContent.css";
import { Radio } from "antd";

const VehiculeContent = ({ data, onChangeForm }) => {
  const radioStyle = {
    display: "block",
    height: "60px",
    lineHeight: "60px",
  };
  return (
    <div className="vehicule-container">
      <Radio.Group value={data} onChange={(e) => onChangeForm(e.target.value)}>
        <Radio style={radioStyle} value={1}>
          Bike
        </Radio>
        <Radio style={radioStyle} value={2}>
          Motor Bike
        </Radio>
        <Radio style={radioStyle} value={3}>
          Car
        </Radio>
        <Radio style={radioStyle} value={4}>
          Motor Bike XL
        </Radio>
      </Radio.Group>
    </div>
  );
};

export default VehiculeContent;
