import React from "react";
import Day from "./Day";

const Daily = ({ main, weather }) => {
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
  let date = `${month} ${day.getDate()}`;
  let date2 = `${month} ${day.getDate() + 1}`;
  let date3 = `${month} ${day.getDate() + 2}`;
  let date4 = `${month} ${day.getDate() + 3}`;
  let date5 = `${month} ${day.getDate() + 4}`;
  return (
    <div className="w-[100%] lg:h-[40%] lg:w-[100%] lg:mt-0 ">
      <p className="lg:text-[1.25rem] font-[500] m-2">Daily</p>
      <div className="w-[100%] h-[100%] gap-2 flex flex-col lg:flex-row flex-nowrap lg:justify-around">
        <Day
          day={date}
          cloud={weather.list[0].weather[0].main}
          temperature={main.temp}
          desc={weather.list[0].weather[0].main}
          condition={weather.list[0].weather[0].description}
        />
        <Day
          day={date2}
          cloud={weather.list[3].weather[0].main}
          temperature={weather.list[3].main.temp}
          desc={weather.list[3].weather[0].main}
          condition={weather.list[3].weather[0].description}
        />
        <Day
          day={date3}
          cloud={weather.list[6].weather[0].main}
          temperature={weather.list[6].main.temp}
          desc={weather.list[6].weather[0].main}
          condition={weather.list[6].weather[0].description}
        />
        <Day
          day={date4}
          cloud={weather.list[9].weather[0].main}
          temperature={weather.list[9].main.temp}
          desc={weather.list[9].weather[0].main}
          condition={weather.list[9].weather[0].description}
        />
        <Day
          day={date5}
          cloud={weather.list[12].weather[0].main}
          temperature={weather.list[12].main.temp}
          desc={weather.list[12].weather[0].main}
          condition={weather.list[12].weather[0].description}
        />
      </div>
    </div>
  );
};

export default Daily;
