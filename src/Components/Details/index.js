import React from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  //API CALL
  const { id } = useParams();
  return <div>Details of the delivery n° {id} </div>;
};

export default Details;
