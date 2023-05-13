import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import {
  Colors,
  LineController,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Legend,
} from "chart.js";

Chart.register(
  Colors,
  LineController,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Legend
);

// LineController
// LineElement
// PointElement
// Default scales: CategoryScale (x), LinearScale (y)

const Graph = ({ weather }) => {
  const labels = [
    weather.list[0].dt_txt.slice(11, 16),
    weather.list[1].dt_txt.slice(11, 16),
    weather.list[2].dt_txt.slice(11, 16),
    weather.list[3].dt_txt.slice(11, 16),
    weather.list[4].dt_txt.slice(11, 16),
    weather.list[5].dt_txt.slice(11, 16),
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Weather Temperature Dataset",
        data: [
          weather.list[0].main.temp,
          weather.list[1].main.temp,
          weather.list[2].main.temp,
          weather.list[3].main.temp,
          weather.list[4].main.temp,
          weather.list[5].main.temp,
        ],
        fill: {
          target: "origin",
          above: "#f1f1e070",
          // below: "blue", // And blue below the origin
        },
        borderColor: "#f1f1e0",
        pointBorderColor: "#f1f1e0",
        pointBorderWidth: 2,
        borderWidth: 2,
        pointStyle: "rectRounded",
        pointRadius: 10,
        pointHoverRadius: 15,
        tension: 0.3,
      },
    ],
  };
  const options = {
    responsive: true,
    spanGaps: 10,
    maintainAspectRatio: false,
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        grid: { display: false, tickWidth: 1 },
        ticks: {},
        display: false,
        title: {
          display: true,
          text: "Day",
        },
      },
      y: {
        min: 0,
        max: 80,
        ticks: {
          callback: (value) => value + "°C",
        },
        title: {
          display: true,
          text: "Temperature(°C)",
        },
      },
    },
  };

  //calling params
  const config = {
    type: "line",
    data: data,
  };
  return (
    <div className="h-[60%] w-[100%] relative flex flex-col lg:flex-row gap-4">
      <div className="h-[100%] lg:w-[60%]">
        <p className="text-[1.25rem] font-[500] m-2 text-left">Graph</p>
        <div className="w-[100%] h-[80%] relative flex">
          <Line
            data={data}
            option={options}
            className="bg-[#f1f1e062] "
            // className="w-[10rem] h-[10rem]"
          ></Line>
        </div>
      </div>
      <div className="lg:w-[40%]">
        <p className="text-[1.25rem] font-[500] m-2 text-left">Suggestion</p>
        <div className="w-[100%] h-[80%] relative flex">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            quasi id praesentium eum repellendus, voluptas minus beatae fugiat
            non voluptatem illum illo ea inventore ut cum nostrum quia totam
            ducimus!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Graph;
