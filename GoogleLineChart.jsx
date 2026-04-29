// src/components/GoogleLineChart.jsx
import React from "react";
import { Chart } from "react-google-charts";

export default function GoogleLineChart() {
  const data = [
    ["Month", "Revenue"],
    ["Jan", 1000],
    ["Feb", 1170],
    ["Mar", 660],
    ["Apr", 1030],
  ];

  const options = {
    title: "Company Revenue",
    curveType: "function",
    legend: { position: "bottom" },
  };

  return <Chart chartType="LineChart" width="100%" height="300px" data={data} options={options} />;
}
