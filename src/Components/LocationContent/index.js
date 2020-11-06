import React from "react";
import "./locationContent.css";
import AddressInput from "./AddressInput";
import ClientInfo from "./ClientInfo";
import AddressBookBtn from "./AddressBookBtn";

const LocationContent = ({ type, data, onChangeForm }) => {
  return (
    <div className="location-content">
      <AddressInput value={data.address} onChangeForm={onChangeForm} />
      <ClientInfo type={type} data={data} onChangeForm={onChangeForm} />
      <AddressBookBtn
        value={data.savedToAddressBook}
        onChangeForm={onChangeForm}
      />
    </div>
  );
};

export default LocationContent;
