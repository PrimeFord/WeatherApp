import React from "react";
import Title from "./Title";
import SearchComponent from "./SearchComponent";

const CityComponents = (props) => {
  // if (city.trim().length !== 0) {
  //   setEmpty("");
  // } else {
  //   setEmpty("Please enter an address in this field");
  // }
  return (
    <div className="h-[75%] w-[95%] text-center">
      <Title />
      <SearchComponent
        setCity={props.setCity}
        fetchWeather={props.fetchWeather}
      />
      {/* <p className="text-[#f53434f1] lg:text-left lg:ml-[10rem]">{empty}</p> */}
      {/* <p className="text-[#f53434f1] lg:text-left lg:ml-[10rem]">sorry</p> */}
    </div>
  );
};

export default CityComponents;
