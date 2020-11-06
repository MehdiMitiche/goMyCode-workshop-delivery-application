import React from "react";
import { Radio, DatePicker } from "antd";
import "./dateContent.css";

const DateContent = ({ when, date, onChangeForm, onChangeDate }) => {
  return (
    <div className="date-container">
      <Radio.Group value={when} onChange={(e) => onChangeForm(e.target.value)}>
        <Radio value={1}>Now</Radio>
        <Radio value={2}>Later</Radio>
      </Radio.Group>
      <div className="row later-date">
        {when === 2 ? (
          <DatePicker
            onChange={(date) => {
              onChangeDate(date.format());
            }}
            value={date}
            size="large"
            showTime
          />
        ) : null}
      </div>
    </div>
  );
};

export default DateContent;
