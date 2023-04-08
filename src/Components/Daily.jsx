import React from "react";
import Day from "./Day";

const Daily = () => {
  return (
    <div className="h-[50%] bg-[red] w-[100%] ">
      <p>Daily</p>
      <div className="w-[100%] flex flex-wrap gap-4">
        <Day day="" cloud="" temperature="" condition="" />
      </div>
    </div>
  );
};

export default Daily;
