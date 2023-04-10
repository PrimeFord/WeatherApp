import React from "react";
import Day from "./Day";

const Daily = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day = new Date();
  let month = months[day.getMonth()];
  let date = `${month} ${day.getDay()}`;
  return (
    <div className="h-[50%] w-[100%] ">
      <p className="text-[1.25rem] font-[500] m-2">Daily</p>
      <div className="w-[100%] h-[100%] flex flex-nowrap justify-around">
        <Day
          day={date}
          cloud="/image/cloudy.svg"
          temperature="60C"
          condition="Cloudy"
        />
        <Day
          day={date}
          cloud="/image/cloudy.svg"
          temperature="60C"
          condition="Cloudy"
        />
        <Day
          day={date}
          cloud="/image/cloudy.svg"
          temperature="60C"
          condition="Cloudy"
        />
        <Day
          day={date}
          cloud="/image/cloudy.svg"
          temperature="60C"
          condition="Cloudy"
        />
        <Day
          day={date}
          cloud="/image/cloudy.svg"
          temperature="60C"
          condition="Cloudy"
        />
      </div>
    </div>
  );
};

export default Daily;
