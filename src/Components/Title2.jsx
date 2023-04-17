import React from "react";

const Title2 = () => {
  return (
    <div className="flex justify-center items-center mt-2 lg:mt-0 lg:items-start h-fit w-fit flex-row gap-3">
      <p className="lg:text-[1.8rem]">Prime Weather</p>
      <span>
        <img
          className="h-[2rem] w-[2rem] lg:h-[3.5rem] lg:w-[3.5rem] lg:ml-4"
          src="/image/perfect-day.svg"
          alt=""
        />
      </span>
    </div>
  );
};

export default Title2;
