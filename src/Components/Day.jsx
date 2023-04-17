import React from "react";

const Day = (props) => {
  return (
    <div className="h-[18%] bg-[teal] lg:bg-transparent w-[100%] lg:h-[80%] lg:w-[10rem] font-[500] lg:px-4 lg:py-1 p-2 flex flex-row lg:flex-col items-center lg:item-start text-[0.8rem] lg:justify-between gap-3 lg:gap-1 border-solid border-2 border-[#f1f1f150] rounded-[1rem] hover:bg-[#f1f1f133]">
      <p className="w-[20%] lg:w-fit">{props.day}</p>
      <img
        className="h-[3rem] w-[3rem] lg:h-[4rem] lg:w-[4rem] m-auto"
        src={`/image/${props.cloud}.svg`}
        alt=""
      />
      <p className="lg:text-[1.25rem]">{Math.round(props.temperature)}°C</p>
      <div className=" lg:w-fit w-[40%] text-center">
        <p className="text-[0.9rem]">{props.desc}</p>
        <p className="lg:text-[0.75rem]">{props.condition}</p>
      </div>
    </div>
  );
};

export default Day;
