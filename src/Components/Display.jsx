import React from "react";

const Display = ({ cityy, main, wind, weather }) => {
  return (
    <div className="w-[100%]  h-[fit] lg:w-[35%] lg:bg-none bg-[url(/image/bg2.avif)] bg-no-repeat bg-cover bg-center bg-blend-normal rounded-md lg:h-[100%] flex flex-col items-center justify-between py-2 gap-2 lg:gap-0 text-center lg:border-solid lg:border-r-2 px-4 lg:border-[#f1f1f1e0]">
      <p className="text-[0.9rem] lg:text-[1.5rem]">
        {cityy.name}, <span>{cityy.country}</span>
      </p>
      <div className="flex items-center gap-5">
        <img
          className="h-[4rem] w-[4rem] mt-2 lg:h-[10rem] lg:w-[10rem]"
          src={`/image/${weather.list[0].weather[0].main}.svg`}
          alt=""
        />
        <span className="text-[2.5rem] block lg:hidden">
          {Math.round(main.temp)}°C
        </span>
      </div>
      <p className="text-[0.9rem] lg:text-[1rem]">
        {weather.list[0].weather[0].main}
      </p>
      <p className="text-[0.9rem] lg:text-[1rem]">
        {weather.list[0].weather[0].description}
      </p>
      <p className="text-[3.5rem] hidden lg:block">{Math.round(main.temp)}°C</p>
      <div className="flex bg-[#f1f1e050] lg:bg-transparent rounded-[0.75rem] lg:flex-wrap lg:w-[75%] justify-between gap-4 mt-2 lg:mt-0 p-2">
        <div className="flex flex-col w-[23%] lg:w-[30%] items-center">
          <img className=" h-[2rem] w-[2rem]" src="/image/humid5.png" alt="" />
          <p className="text-[.9rem]">{main.humidity}%</p>
          <p className="text-[.75rem] font-[500]">Humidity</p>
        </div>
        <div className="flex flex-col w-[23%] lg:w-[30%] items-center">
          <img
            className=" h-[2rem] w-[2rem]"
            src="/image/thermometer.png"
            alt=""
          />
          <p className="text-[.9rem]">{Math.round(main.temp)}°C</p>
          <p className="text-[.75rem] font-[500]">Temperature</p>
        </div>
        <div className="flex flex-col w-[23%] lg:w-[30%] items-center">
          <img className=" h-[2rem] w-[2rem]" src="/image/wind.png" alt="" />
          <p className="text-[.9rem]">{wind}m/s</p>
          <p className="text-[.75rem] font-[500]">Wind</p>
        </div>
        <div className="flex flex-col w-[23%] lg:w-[30%] items-center">
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
