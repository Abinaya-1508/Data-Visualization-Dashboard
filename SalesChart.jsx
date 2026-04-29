// src/components/SalesChart.jsx
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// REGISTER REQUIRED ELEMENTS
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Sales",
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: "rgba(75,192,192,0.6)",
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { position: "top" },
    title: { display: true, text: "Monthly Sales" },
  },
};

export default function SalesChart() {
  return <Bar data={data} options={options} />;
}
