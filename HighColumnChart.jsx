// src/components/HighColumnChart.jsx
import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function HighColumnChart() {
  const options = {
    chart: { type: "column" },
    title: { text: "Monthly Sales" },
    xAxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May"] },
    yAxis: { title: { text: "Sales" } },
    series: [{ name: "Revenue", data: [29, 71, 106, 129, 144] }],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
