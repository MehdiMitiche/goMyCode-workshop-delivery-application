import { Button } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";

const MY_REQUESTS = [
  { id: 0, pickup: "Ben Aknoun", dropoff: "Bab ezouar", date: "Today" },
  { id: 1, pickup: "dar el beida", dropoff: "Bab ezouar", date: "Today" },
  { id: 2, pickup: "Hydra", dropoff: "Kouba", date: "last week" },
];

const MyRequests = () => {
  const history = useHistory();
  return (
    <div className="column" style={{ width: "80%" }}>
      {MY_REQUESTS.map((elem) => (
        <div
          key={elem.id}
          className="row"
          style={{
            width: "80%",
            justifyContent: "space-between",
            margin: "20px 10px",
          }}
        >
          <div>{elem.pickup}</div>
          <div>{elem.dropoff}</div>
          <div>{elem.date}</div>

          <Button
            type="primary"
            size="large"
            onClick={() => history.push(`/Details/${elem.id}`)}
          >
            DETAILS
          </Button>
        </div>
      ))}
    </div>
  );
};

export default MyRequests;
