import React from "react";
import "./clientInfo.css";
import { Input } from "antd";

const clientInfo = ({ type, data, onChangeForm }) => {
  return (
    <>
      <div className="row">
        <div className="info-input">
          <Input
            onChange={(e) => onChangeForm("firstName", e.target.value)}
            className="input"
            placeholder="First Name"
            value={data.firstName}
            size="large"
          />
        </div>
        <div className="info-input">
          <Input
            onChange={(e) => onChangeForm("lastName", e.target.value)}
            className="input"
            value={data.lastName}
            placeholder="Last Name"
            size="large"
          />
        </div>
      </div>
      <div className="row">
        <div className="info-input">
          <Input
            onChange={(e) => onChangeForm("company", e.target.value)}
            className="input"
            value={data.company}
            placeholder="Company"
            size="large"
          />
        </div>
      </div>
      <div className="row">
        <div className="info-input">
          <Input
            onChange={(e) => onChangeForm("phone", e.target.value)}
            className="input"
            value={data.phone}
            placeholder="Phone Number"
            size="large"
          />
        </div>
        <div className="info-input">
          <Input
            onChange={(e) => onChangeForm("email", e.target.value)}
            className="input"
            value={data.email}
            placeholder="Email"
            size="large"
          />
        </div>
      </div>
      <div className="row">
        <div className="info-input">
          <Input
            onChange={(e) => onChangeForm("details", e.target.value)}
            className="input"
            value={data.details}
            placeholder="Details"
            size="large"
          />
        </div>
      </div>
      {type !== "pickUp" ? (
        <>
          <div>ORDER DETAILS</div>
          <div className="row">
            <div className="info-input">
              <Input
                onChange={(e) => onChangeForm("orderId", e.target.value)}
                className="input"
                value={data.orderId}
                placeholder="Order ID"
                size="large"
              />
            </div>
          </div>
          <div className="row">
            <div className="info-input">
              <Input
                onChange={(e) =>
                  onChangeForm("orderInformation", e.target.value)
                }
                name="orderInformation"
                value={data.orderInformation}
                className="input"
                placeholder="Order Information"
                size="large"
              />
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default clientInfo;
