import React from "react";

const SearchComponent = () => {
  return (
    <div className="my-10 text-black">
      <p className="text-[#f1f1f1e0] text-[1.8rem] mb-8">
        Find the weather of your city
      </p>
      <form className="flex flex-row justify-center" action="">
        <input
          className="w-[60%] h-[2.5rem] py-2 px-4 rounded-l-[1.25rem] bg-[#f1f1f1e0] outline-none border-none"
          type="text"
          placeholder="Enter your city"
        />
        <button>
          <img
            className="h-[2.5rem] w-[2.5rem] bg-[#f1f1f1e0] p-[0.6rem] hover:bg-[#c1c1c1]"
            src="/image/map1.svg"
            alt=""
          />
        </button>
        <button className="h-[2.5rem] w-[15%] p-2 rounded-r-[1.25rem] cursor-pointer hover:bg-[#294357] hover:text-[white] text-white bg-[teal]">
          {/* bg-gradient-to-r from-[#071f3d] to-[#294357] */}
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchComponent;
