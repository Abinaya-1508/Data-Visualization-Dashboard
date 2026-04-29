// src/pages/Others.jsx
import React from "react";

// Chart Components
import GanttChartComp from "../components/GanttChartComp";
import BubbleChartComp from "../components/BubbleChartComp";
import ScatterPlotComp from "../components/ScatterPlotComp";
import TreemapComp from "../components/TreemapComp";

export default function Others() {
  return (
    <div className="others-page">

      {/* Page Header */}
      <header style={{ marginBottom: "30px" }}>
        <h2>Dashboard Charts</h2>
        <p>Visual analytics overview — interactive and professional</p>
      </header>

      {/* Overview Cards */}
      <div className="overview-cards">
        <div className="card card-purple">
          <h3>42</h3>
          <p>On route vehicles</p>
          <span>+18.2% than last week</span>
        </div>
        <div className="card card-teal">
          <h3>8</h3>
          <p>Vehicles with errors</p>
          <span>-8.7% than last week</span>
        </div>
        <div className="card card-orange">
          <h3>27</h3>
          <p>Deviated from route</p>
          <span>+4.3% than last week</span>
        </div>
        <div className="card card-blue">
          <h3>13</h3>
          <p>Late vehicles</p>
          <span>-2.5% than last week</span>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="charts-grid">
        <div className="chart-card">
          <h4>Gantt Chart</h4>
          <GanttChartComp />
        </div>

        <div className="chart-card">
          <h4>Bubble Chart</h4>
          <BubbleChartComp />
        </div>

        <div className="chart-card">
          <h4>Scatter Plot</h4>
          <ScatterPlotComp />
        </div>

        <div className="chart-card full-width">
          <h4>Treemap Chart</h4>
          <TreemapComp />
        </div>
      </div>

      {/* Footer */}
      <footer>
        © 2025 Made With ❤️ by Dreamworld
      </footer>
    </div>
  );
}
