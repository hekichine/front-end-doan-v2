import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const Chart = (props) => {
  let dataChart = props.dataChart;
  const data = {
    labels: dataChart.map((data) => data.month),
    datasets: [
      {
        data: dataChart.map((data) => data.total),
        backgroundColor: "transparent",
        borderColor: "#f26c6d",
        pointBorderColor: "#000",
      },
    ],
  };

  return (
    <>
      <Line data={data} />
    </>
  );
};

export default Chart;
