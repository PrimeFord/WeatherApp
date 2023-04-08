import React from "react";

const Day = (props) => {
  return (
    <div>
      <p>{props.day}</p>
      <p>{props.cloud}</p>
      <p>{props.temperature}</p>
      <p>{props.condition}</p>
    </div>
  );
};

export default Day;
