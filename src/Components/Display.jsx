import React from "react";

const Display = ({ cityy, main, wind, weather }) => {
  return (
    <div className="w-[38%] h-[100%] flex flex-col items-center justify-between py-2 text-center border-solid border-r-2 p-4 border-[#f1f1f1e0]">
      <p className="text-[1.5rem]">
        {cityy.name}, <span>{cityy.country}</span>
      </p>
      <img
        className="h-[10rem] w-[10rem]"
        src={`/image/${weather.list[0].weather[0].main}.svg`}
        alt=""
      />
      <p>{weather.list[0].weather[0].main}</p>
      <p>{weather.list[0].weather[0].description}</p>
      <p className="text-[3.5rem]">{Math.round(main.temp)}°C</p>
      <div className="flex flex-wrap w-[85%] justify-between gap-10 p-2">
        <div className="flex flex-col w-fit items-center">
          <img className=" h-[2rem] w-[2rem]" src="/image/humid5.png" alt="" />
          <p className="text-[.9rem]">{main.humidity}%</p>
          <p className="text-[.75rem] font-[500]">Humidity</p>
        </div>
        <div className="flex flex-col w-fit items-center">
          <img
            className=" h-[2rem] w-[2rem]"
            src="/image/thermometer.png"
            alt=""
          />
          <p className="text-[.9rem]">{Math.round(main.temp)}°C</p>
          <p className="text-[.75rem] font-[500]">Temperature</p>
        </div>
        <div className="flex flex-col w-fit items-center">
          <img className=" h-[2rem] w-[2rem]" src="/image/wind.png" alt="" />
          <p className="text-[.9rem]">{wind}m/s</p>
          <p className="text-[.75rem] font-[500]">Wind</p>
        </div>
        <div className="flex flex-col w-fit items-center">
          <img
            className=" h-[2rem] w-[2rem]"
            src="/image/pressureg.png"
            alt=""
          />
          <p className="text-[.9rem]">
            {main.pressure}N/m<sup>2</sup>
          </p>
          <p className="text-[.75rem] font-[500]">Pressure</p>
        </div>
      </div>
    </div>
  );
};

export default Display;
