import React from "react";

const Title2 = () => {
  return (
    <div className="flex justify-center h-fit w-fit flex-row gap-3">
      <p className="text-[1.8rem]">Prime Weather</p>
      <span>
        <img
          className="h-[3.5rem] w-[3.5rem] ml-4"
          src="/image/perfect-day.svg"
          alt=""
        />
      </span>
    </div>
  );
};

export default Title2;
