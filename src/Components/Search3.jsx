import React from "react";
import Load from "./Load";

const Search3 = (props) => {
  return (
    <div className="h-fit w-[100%] block lg:hidden">
      <form
        className="flex h-[2rem] flex-row justify-center"
        action=""
        onSubmit={props.fetchWeather}
      >
        <input
          className="w-[60%] h-[2rem] py-2 px-4 rounded-l-[1.25rem] bg-[#f1f1f1e0] text-[0.9rem] outline-none border-none text-[black]"
          type="text"
          placeholder="Enter your city"
          onChange={(e) => props.setCity(e.target.value)}
        />
        <button onClick={props.locate}>
          <img
            className="h-[2rem] w-[2rem] bg-[#f1f1f1e0] p-[0.6rem] hover:bg-[#c1c1c1]"
            src="/image/map1.svg"
            alt=""
          />
        </button>
        <button className="h-[2rem] w-[4.5rem] flex items-center justify-center p-2 rounded-r-[1.25rem] text-[0.9rem] cursor-pointer hover:bg-[#294357] hover:text-[white] text-white bg-[teal]">
          {/* bg-gradient-to-r from-[#071f3d] to-[#294357] */}
          Search
        </button>
      </form>
      {props.loading ? <Load /> : ""}
      <div className="lg:hidden flex text-center m-auto flex-col mt-1">
        <p className="text-[#ff661ff6] lg:text-left lg:ml-[10rem]">
          {props.empty}
        </p>
        <p className="text-[#ff661ff6] lg:text-left lg:ml-[10rem]]">
          {props.error}
        </p>
      </div>
    </div>
  );
};

export default Search3;
