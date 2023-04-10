import React from "react";

const Display = () => {
  return (
    <div className="w-[38%] h-[100%] flex flex-col items-center justify-between py-2 text-center border-solid border-r-2 p-4 border-[#f1f1f1e0]">
      <p>Mumbai, India</p>
      <img className="h-[10rem] w-[10rem]" src="/image/cloudy.svg" alt="" />
      <p className="text-[3.5rem]">40C</p>
      <div className="flex flex-wrap w-[85%] justify-between p-2">
        <div className="flex flex-col w-fit items-center">
          <img className=" h-[2rem] w-[2rem]" src="/image/humid5.png" alt="" />
          <p>80%</p>
          <p className="text-[.75rem] font-[500]">Humidity</p>
        </div>
        <div className="flex flex-col w-fit items-center">
          <img
            className=" h-[2rem] w-[2rem]"
            src="/image/thermometer.png"
            alt=""
          />
          <p>80%</p>
          <p className="text-[.75rem] font-[500]">Temperature</p>
        </div>
        <div className="flex flex-col w-fit items-center">
          <img className=" h-[2rem] w-[2rem]" src="/image/wind.png" alt="" />
          <p>80%</p>
          <p className="text-[.75rem] font-[500]">Wind</p>
        </div>
        <div className="flex flex-col w-fit items-center">
          <img
            className=" h-[2rem] w-[2rem]"
            src="/image/pressureg.png"
            alt=""
          />
          <p>8%</p>
          <p className="text-[.75rem] font-[500]">Pressure</p>
        </div>
      </div>
    </div>
  );
};

export default Display;
