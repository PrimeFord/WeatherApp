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

const Graph = () => {
  const labels = ["january", "january", "january", "january", "january"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Weather Temperature Dataset",
        data: [65, 59, 80, 81, 56],
        // fill: false,
        fill: {
          target: "origin",
          above: "rgb(255, 0, 0)", // Area will be red above the origin
          below: "blue", // And blue below the origin
        },
        borderColor: "#f1f1e0",
        pointBorderColor: "#f1f1e0",
        pointBorderWidth: 3,
        borderWidth: 5,
        tension: 0.3,
      },
    ],
  };
  const options = {
    plugins: {
      legend: false,
    },
    scales: {
      x: { grid: { display: false } },
      y: {
        suggestMin: 0,
        suggestedMax: 100,
        ticks: { stepsize: 2, callback: (value) => value + "C" },
      },
    },
  };

  //calling params
  const config = {
    type: "line",
    data: data,
  };
  return (
    <div className="h-[50%] w-[100%]">
      <p className="text-[1.25rem] font-[500] m-2 text-left">Graph</p>
      <div className="w-[100%] h-fit p-4 bg-[red]">
        <Line data={data} option={options} className="h-[] w-[1rem]"></Line>
      </div>
    </div>
  );
};

export default Graph;
