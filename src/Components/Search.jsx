import React from "react";
import Load from "./Load";

const Search = (props) => {
  return (
    <div className="">
      <form className="mt-10 lg:mt-0" action="" onSubmit={props.fetchWeather}>
        <div className="flex flex-row justify-center">
          <input
            className="w-[100%] lg:w-[30%] h-[2.5rem] py-2 px-4 rounded-l-[1.25rem] bg-[#f1f1f1e0] outline-none border-none"
            type="text"
            placeholder="Enter your city"
            value={props.city}
            onChange={(e) => props.setCity(e.target.value)}
          />
          <button onClick={props.locate} className="">
            <img
              className="h-[2.5rem] w-[2.5rem] rounded-r-[1.25rem] lg:rounded-r-none bg-[#f1f1f1e0] p-[0.6rem] hover:bg-[#c1c1c1]"
              src="/image/map1.svg"
              alt=""
            />
          </button>
          <button className="h-[2.5rem] w-[10%] p-2 rounded-r-[1.25rem] cursor-pointer hover:bg-[#294357] hover:text-[white] hidden lg:block text-white bg-[teal]">
            {/* bg-gradient-to-r from-[#071f3d] to-[#294357] */}
            Search
          </button>
        </div>
        <div className="hidden lg:flex lg:flex-col">
          <p className="text-[#ff661ff6] mt-2">{props.empty}</p>
          <p className="text-[#ff661ff6] mt-2">{props.error}</p>
        </div>
        <div className="lg:hidden flex flex-col mt-1">
          <p className="text-[#ff661ff6] lg:text-left lg:ml-[10rem]">
            {props.empty}
          </p>
          <p className="text-[#ff661ff6] lg:text-left lg:ml-[10rem]]">
            {props.error}
          </p>
        </div>
        <div
          className="block lg:hidden
        "
        >
          {props.loading ? <Load /> : ""}
        </div>
        <div>
          <button className="h-[2.5rem] w-[100%] mt-4 block lg:hidden p-2 rounded-[1.25rem] cursor-pointer hover:bg-[#294357] hover:text-[white] text-white bg-[#008080]">
            {/* bg-gradient-to-r from-[#071f3d] to-[#294357] */}
            Search
          </button>
        </div>
        <div
          className="hidden lg:block
        "
        >
          {props.loading ? <Load /> : ""}
        </div>
      </form>
    </div>
  );
};

export default Search;
