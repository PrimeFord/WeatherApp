import React from "react";

const Title = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-6">
      <p className="text-[1.5rem] lg:text-[2.25rem]">Prime Weather</p>
      <span>
        <img
          className="h-[5rem] w-[5rem] ml-4"
          src="/image/perfect-day.svg"
          alt=""
        />
      </span>
    </div>
  );
};

export default Title;
