import React from "react";

const Search = () => {
  return (
    <div>
      <form className="mt-10 lg:mt-0" action="">
        <div className="flex flex-row justify-center">
          <input
            className="w-[100%] lg:w-[60%] h-[2.5rem] py-2 px-4 rounded-l-[1.25rem] bg-[#f1f1f1e0] outline-none border-none"
            type="text"
            placeholder="Enter your city"
          />
          <button className="">
            <img
              className="h-[2.5rem] w-[2.5rem] rounded-r-[1.25rem] lg:rounded-r-none bg-[#f1f1f1e0] p-[0.6rem] hover:bg-[#c1c1c1]"
              src="/image/map1.svg"
              alt=""
            />
          </button>
          <button className="h-[2.5rem] w-[15%] p-2 rounded-r-[1.25rem] cursor-pointer hover:bg-[#294357] hover:text-[white] hidden lg:block text-white bg-[teal]">
            {/* bg-gradient-to-r from-[#071f3d] to-[#294357] */}
            Search
          </button>
        </div>
        <div>
          <button className="h-[2.5rem] w-[100%] mt-4 block lg:hidden p-2 rounded-[1.25rem] cursor-pointer hover:bg-[#294357] hover:text-[white] text-white bg-[teal]">
            {/* bg-gradient-to-r from-[#071f3d] to-[#294357] */}
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
