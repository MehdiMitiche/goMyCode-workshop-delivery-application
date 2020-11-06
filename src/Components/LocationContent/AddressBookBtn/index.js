import React from "react";
import { Switch } from "antd";
import "./addressBookBtn.css";

const AddressBookBtn = ({ value, onChangeForm }) => {
  return (
    <div className="row switch-container">
      <Switch
        size="small"
        checked={value}
        onChange={() => onChangeForm("savedToAddressBook", !value)}
      />
      <div className="address-book-text">Save to Address book</div>
    </div>
  );
};

export default AddressBookBtn;
