import React from "react";
import Title from "./Title";
import SearchComponent from "./SearchComponent";

const CityComponents = (props) => {
  return (
    <div className="h-[100vh] pt-4 lg:h-[75%] w-[95%] text-center">
      <Title />
      <SearchComponent
        setCity={props.setCity}
        city={props.city}
        fetchWeather={props.fetchWeather}
        empty={props.empty}
        error={props.error}
        loading={props.loading}
        locate={props.locate}
      />
    </div>
  );
};

export default CityComponents;
