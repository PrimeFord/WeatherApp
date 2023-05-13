import React from "react";
import Title2 from "./Title2";
import Search2 from "./Search2";
import Display from "./Display";
import Daily from "./Daily";
import Graph from "./Graph";
import Search3 from "./Search3";

const WeatherComponents = ({
  setCity,
  fetchWeather,
  locate,
  error,
  empty,
  cityy,
  main,
  wind,
  weather,
  loading,
}) => {
  return (
    <div className=" p-2 lg:p-5 lg:h-[100vh] w-[100%] flex flex-col gap-2 lg:gap-4">
      <div className="flex lg:flex-row flex-col items-center justify-between">
        <Search3
          setCity={setCity}
          locate={locate}
          fetchWeather={fetchWeather}
          empty={empty}
          error={error}
          loading={loading}
        />
        <Title2 />
        <Search2
          setCity={setCity}
          locate={locate}
          fetchWeather={fetchWeather}
          empty={empty}
          error={error}
          loading={loading}
        />
      </div>
      <div className="flex flex-col lg:flex-row h-[90%] lg:items-center lg:gap-6">
        <Display cityy={cityy} main={main} wind={wind} weather={weather} />
        <div className="w-[100%] h-[100%] mt-5 lg:mt-0 flex flex-col gap-2 items-center justify-between">
          <Daily main={main} weather={weather} />
          <Graph weather={weather} />
        </div>
      </div>
    </div>
  );
};

export default WeatherComponents;
