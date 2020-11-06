import React from "react";
import Card from "../Card";
import "./deliverySide.css";
import { FlagTwoTone, CarTwoTone, CalendarTwoTone } from "@ant-design/icons";
import LocationContent from "../LocationContent";
import VehiculeContent from "../VehiculeContent";
import DateContent from "../DateContent";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "antd";

const DeliverySide = () => {
  const dispatch = useDispatch();
  const { pickUp, dropOff, vehicule, when, date } = useSelector(
    (state) => state.delivery
  );
  return (
    <div className="delvery-side-container center">
      <Card title="Pick Up" icon={<FlagTwoTone twoToneColor="#4869c5" />}>
        <LocationContent
          onChangeForm={(key, value) =>
            dispatch({
              type: "SET_STATE",
              payload: { pickUp: { ...pickUp, [`${key}`]: value } },
            })
          }
          data={pickUp}
          type="pickUp"
        />
      </Card>

      {dropOff.map((elem, index) => (
        <Card
          key={index}
          title="Drop Off"
          icon={<FlagTwoTone twoToneColor="#55f1a0" />}
        >
          <LocationContent
            data={elem}
            type="dropOff"
            onChangeForm={(key, value) => {
              dispatch({
                type: "SET_STATE",
                payload: {
                  dropOff: dropOff.map((element, i) => {
                    if (i !== index) return element;
                    return { ...element, [`${key}`]: value };
                  }),
                },
              });
            }}
          />
        </Card>
      ))}

      <div>
        <Button
          type="primary"
          size="large"
          onClick={() =>
            dispatch({
              type: "SET_STATE",
              payload: {
                dropOff: [
                  ...dropOff,
                  {
                    firstName: "",
                    lastName: "",
                    company: "",
                    address: "",
                    phone: "",
                    email: "",
                    details: "",
                    savedToAddressBook: false,
                    orderId: "",
                    orderInformation: "",
                    imageDisplayed: false,
                  },
                ],
              },
            })
          }
        >
          ADD DROPOFF
        </Button>
      </div>
      <Card
        title="Select a vehicule"
        icon={<CarTwoTone twoToneColor="#55f1a0" />}
      >
        <VehiculeContent
          onChangeForm={(value) =>
            dispatch({
              type: "SET_STATE",
              payload: { vehicule: value },
            })
          }
          data={vehicule}
        />
      </Card>
      <Card
        title="When do you need a courier?"
        icon={<CalendarTwoTone twoToneColor="#55f1a0" />}
      >
        <DateContent
          onChangeForm={(value) =>
            dispatch({
              type: "SET_STATE",
              payload: { when: value },
            })
          }
          onChangeDate={(date) =>
            dispatch({ type: "SET_STATE", payload: { date } })
          }
          when={when}
          date={date}
        />
      </Card>
    </div>
  );
};

export default DeliverySide;
