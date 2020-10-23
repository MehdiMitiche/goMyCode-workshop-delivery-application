import React from "react";
import Card from "../Card";
import "./deliverySide.css";
import { FlagTwoTone } from "@ant-design/icons";

const DeliverySide = () => {
  return (
    <div className="delvery-side-container center">
      <Card title="Pick Up" icon={<FlagTwoTone twoToneColor="#4869c5" />}>
        <p>HELLO WORLD</p>
      </Card>
    </div>
  );
};

export default DeliverySide;
