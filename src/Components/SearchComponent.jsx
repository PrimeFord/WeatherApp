import React from "react";
import Search from "./Search";

const SearchComponent = (props) => {
  return (
    <div className="my-10 text-black">
      <p className="text-[#f1f1f1e0] text-[1.2rem] lg:text-[1.8rem] mb-8">
        Find the weather of your city
      </p>
      <Search setCity={props.setCity} fetchWeather={props.fetchWeather} />
    </div>
  );
};

export default SearchComponent;
