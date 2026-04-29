// src/pages/Charts.jsx
import React from "react";
import AreaChartComp from "../components/AreaChartComp";
import BarChartComp from "../components/BarChartComp";
import DonutChartComp from "../components/DonutChartComp";
import PieChartComp from "../components/PieChartComp";
import SalesChart from "../components/SalesChart";
import "../dashboard.css";

export default function Charts() {
  return (
    <div className="charts-page">
      <h1 className="page-title">Charts Dashboard</h1>

      <div className="chart-container">

        <div className="chart-small">
          <AreaChartComp />
        </div>

        <div className="chart-small">
          <BarChartComp />
        </div>

        <DonutChartComp />

        <div className="chart-wrapper">
          <PieChartComp />
        </div>

        <div className="chart-wrapper">
          <SalesChart />
        </div>

      </div>
    </div>
  );
}
