import React from "react";
import Load from "./Load";

const Search2 = (props) => {
  return (
    <div className="h-fit w-fit hidden lg:block">
      <form
        className="flex flex-row justify-center items-center"
        action=""
        onSubmit={props.fetchWeather}
      >
        <input
          className="w-[15rem] h-[2.5rem] py-2 px-4 rounded-l-[1.25rem] bg-[#f1f1f1e0] outline-none border-none text-[black]"
          type="text"
          placeholder="Enter your city"
          onChange={(e) => props.setCity(e.target.value)}
        />
        <button onClick={props.locate}>
          <img
            className="h-[2.5rem] w-[2.5rem] bg-[#f1f1f1e0] p-[0.6rem] hover:bg-[#c1c1c1]"
            src="/image/map1.svg"
            alt=""
          />
        </button>
        <button className="h-[2.5rem] w-[5rem] p-2 rounded-r-[1.25rem] cursor-pointer hover:bg-[#294357] hover:text-[white] text-white bg-[teal]">
          {/* bg-gradient-to-r from-[#071f3d] to-[#294357] */}
          Search
        </button>
        <div
          className="hidden lg:block ml-4
        "
        >
          {props.loading ? <Load /> : ""}
        </div>
      </form>
      <div className="lg:hidden flex flex-col mt-1">
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

export default Search2;
