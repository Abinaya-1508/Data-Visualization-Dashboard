// src/components/PieChartComp.jsx
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "Votes",
      data: [12, 19, 3],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverOffset: 4,
    },
  ],
};

export default function PieChartComp() {
  return <Pie data={data} />;
}
