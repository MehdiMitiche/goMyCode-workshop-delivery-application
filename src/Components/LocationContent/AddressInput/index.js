import React from "react";
import { Input } from "antd";
import "./addressInput.css";

const { Search } = Input;

const AddressInput = ({ value, onChangeForm }) => {
  return (
    <div className="address-container">
      <Search
        onChange={(e) => onChangeForm("address", e.target.value)}
        size="large"
        value={value}
        placeholder="Search Address"
      />
    </div>
  );
};

export default AddressInput;
