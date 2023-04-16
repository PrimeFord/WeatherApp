import React from "react";
import Title2 from "./Title2";
import Search2 from "./Search2";
import Display from "./Display";
import Daily from "./Daily";
import Graph from "./Graph";

const WeatherComponents = ({
  setCity,
  fetchWeather,
  cityy,
  main,
  wind,
  weather,
}) => {
  return (
    <div className="bg-[] p-5 h-[100vh] w-[100%] flex flex-col gap-4">
      <div className="flex flex-row items-center justify-between">
        <Title2 />
        <Search2 setCity={setCity} fetchWeather={fetchWeather} />
      </div>
      <div className="flex flex-row h-[100%] items-center gap-6">
        <Display cityy={cityy} main={main} wind={wind} weather={weather} />
        <div className="w-[100%] h-[100%] flex flex-col gap-4 items-center">
          <Daily main={main} weather={weather} />
          <Graph weather={weather} />
        </div>
      </div>
    </div>
  );
};

export default WeatherComponents;
