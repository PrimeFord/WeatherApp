import React from "react";
import Search from "./Search";

const SearchComponent = () => {
  return (
    <div className="my-10 text-black">
      <p className="text-[#f1f1f1e0] text-[1.8rem] mb-8">
        Find the weather of your city
      </p>
      <Search />
    </div>
  );
};

export default SearchComponent;
