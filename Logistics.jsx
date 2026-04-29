// src/pages/Logistics.jsx
import React from "react";

// Chart Components
import D3LineChart from "../components/D3LineChart";
import PlotlySankey from "../components/PlotlySankey";
import GoogleLineChart from "../components/GoogleLineChart";
import HighColumnChart from "../components/HighColumnChart";

// Sample data for D3LineChart
const lineData = [
  { x: 0, y: 5 },
  { x: 1, y: 9 },
  { x: 2, y: 7 },
  { x: 3, y: 5 },
  { x: 4, y: 3 },
  { x: 5, y: 3 },
  { x: 6, y: 2 },
];

export default function Logistics() {
  return (
    <div className="logistics-page">
      <header className="page-header">
        <h2>Logistics Dashboard</h2>
        <p>Monitor deliveries, vehicle status, and performance in real-time</p>
      </header>

      {/* Overview Cards */}
      <div className="overview-cards">
        <div className="card gradient-green">
          <h3>42</h3>
          <p>On route vehicles</p>
          <span className="delta positive">+18.2% than last week</span>
        </div>
        <div className="card gradient-red">
          <h3>8</h3>
          <p>Vehicles with errors</p>
          <span className="delta negative">-8.7% than last week</span>
        </div>
        <div className="card gradient-orange">
          <h3>27</h3>
          <p>Deviated from route</p>
          <span className="delta positive">+4.3% than last week</span>
        </div>
        <div className="card gradient-blue">
          <h3>13</h3>
          <p>Late vehicles</p>
          <span className="delta negative">-2.5% than last week</span>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="charts-grid">
        <div className="chart-card">
          <h4>D3 Line Chart</h4>
          <D3LineChart data={lineData} width={500} height={280} />
        </div>

        <div className="chart-card">
          <h4>Plotly Sankey Chart</h4>
          <PlotlySankey />
        </div>

        <div className="chart-card">
          <h4>Google Line Chart</h4>
          <GoogleLineChart />
        </div>

        <div className="chart-card full-width">
          <h4>Highcharts Column Chart</h4>
          <HighColumnChart />
        </div>
      </div>

      <footer className="dashboard-footer">
        © 2025 Made With ❤️ by Dreamworld
      </footer>
    </div>
  );
}
