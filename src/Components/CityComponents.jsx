import React from "react";
import Title from "./Title";
import SearchComponent from "./SearchComponent";

const CityComponents = (props) => {
  return (
    <div className="h-[75%] w-[95%] text-center">
      <Title />
      <SearchComponent
        setCity={props.setCity}
        fetchWeather={props.fetchWeather}
      />
    </div>
  );
};

export default CityComponents;
