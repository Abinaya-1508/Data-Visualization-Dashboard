// src/pages/Dashboard.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../dashboard.css";

// Your components (ALL exist)
import AreaChartComp from "../components/AreaChartComp";
//import BarChartComp from "../components/BarChartComp";
import PieChartComp from "../components/PieChartComp";
import DonutChartComp from "../components/DonutChartComp";
//import SalesChart from "../components/SalesChart";
import BubbleChartComp from "../components/BubbleChartComp";
import HistogramComp from "../components/HistogramComp";
import ScatterPlotComp from "../components/ScatterPlotComp";
import GanttChartComp from "../components/GanttChartComp";
import HeatmapComp from "../components/HeatmapComp";
import TreemapComp from "../components/TreemapComp";

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/records")
      .then((res) => {
        setData(res.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API error, using sample data", err);

        const sample = [
          { Year: 2018, Country: "United States", Intensity: 30, Likelihood: 40, Relevance: 50 },
          { Year: 2019, Country: "India", Intensity: 25, Likelihood: 30, Relevance: 40 },
          { Year: 2020, Country: "Brazil", Intensity: 20, Likelihood: 20, Relevance: 30 },
          { Year: 2021, Country: "China", Intensity: 35, Likelihood: 50, Relevance: 45 },
          { Year: 2022, Country: "Australia", Intensity: 18, Likelihood: 27, Relevance: 22 },
        ];
        setData(sample);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="page-content">
        <div className="loading-card">
          <div className="loader"></div>
          <div>Loading dashboard...</div>
        </div>
      </div>
    );
  }

  // KPI summary
  const totalRecords = data.length;
  const sumIntensity = data.reduce((s, r) => s + Number(r.Intensity || 0), 0);
  const sumRelevance = data.reduce((s, r) => s + Number(r.Relevance || 0), 0);
  //const sumLikelihood = data.reduce((s, r) => s + Number(r.Likelihood || 0), 0);

  // Top countries
  const countryCounts = data.reduce((acc, r) => {
    const c = r.Country || "Unknown";
    acc[c] = (acc[c] || 0) + 1;
    return acc;
  }, {});

  const topCountries = Object.entries(countryCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map(([name, count]) => ({ name, count }));

  return (
    <div className="page-content neon-bg">

      {/* HEADER */}
      <div className="header-row">
        <h2 className="page-title neon-title">Admin Analytics Dashboard</h2>

        <div className="header-widgets">
          <div className="stat-card">
            <div className="stat-label">Total Records</div>
            <div className="stat-value">{totalRecords}</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Intensity</div>
            <div className="stat-value">{sumIntensity}</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Relevance</div>
            <div className="stat-value">{sumRelevance}</div>
          </div>
        </div>
      </div>

      {/* TABS */}
      <div className="tabs">
        <button className={activeTab === "overview" ? "active" : ""} onClick={() => setActiveTab("overview")}>Overview</button>
        <button className={activeTab === "charts" ? "active" : ""} onClick={() => setActiveTab("charts")}>Charts</button>
        <button className={activeTab === "advanced" ? "active" : ""} onClick={() => setActiveTab("advanced")}>Advanced</button>
        <button className={activeTab === "tables" ? "active" : ""} onClick={() => setActiveTab("tables")}>Tables</button>
        <button className={activeTab === "reports" ? "active" : ""} onClick={() => setActiveTab("reports")}>Reports</button>
      </div>

      {/* OVERVIEW TAB */}
      {activeTab === "overview" && (
        <div className="grid grid-3">

          <div className="card neon-card">
            <h4 className="card-title">Earnings</h4>
            <div className="big-number">$545.69</div>
            <div className="mini">Profit: $256.34 • Expense: $74.19</div>
          </div>

          <div className="card neon-card">
            <h4 className="card-title">Support Tracker</h4>
            <div className="support-grid">
              <div><strong>164</strong><div className="muted">Tickets</div></div>
              <div><strong>142</strong><div className="muted">New</div></div>
              <div><strong>28</strong><div className="muted">Open</div></div>
              <div><strong>1 Day</strong><div className="muted">Response</div></div>
            </div>
          </div>

          <div className="card neon-card">
            <h4 className="card-title">Top Countries</h4>
            {topCountries.map((c, i) => (
              <div key={i} className="country-row">
                <div className="country-name">{c.name}</div>
                <div className="country-value">{c.count}</div>
              </div>
            ))}
          </div>

          <div className="card neon-card">
            <TreemapComp
              data={topCountries.map((t, i) => ({
                name: t.name,
                value: Math.max(1, t.count * 5),
              }))}
            />
          </div>

          <div className="card neon-card">
            <HistogramComp data={data} metric={"Intensity"} />
          </div>

          <div className="card neon-card">
            <BubbleChartComp data={data} />
          </div>

        </div>
      )}

      {/* CHARTS TAB */}
      {activeTab === "charts" && (
        <div className="chart-grid">

          <div className="card neon-card">
            <h4 className="card-title">Intensity Trend</h4>
            <AreaChartComp data={data} />
          </div>

          <div className="card neon-card">
            <h4 className="card-title">Topic Distribution</h4>
            <PieChartComp data={data} />
          </div>

          <div className="card neon-card">
            <h4 className="card-title">Country Distribution</h4>
            <DonutChartComp data={data} />
          </div>

          <div className="card neon-card">
            <h4 className="card-title">Relevance vs Intensity</h4>
            <ScatterPlotComp data={data} />
          </div>

        </div>
      )}

      {/* ADVANCED TAB */}
      {activeTab === "advanced" && (
        <div className="grid grid-2">

          <div className="card neon-card">
            <h4 className="card-title">Histogram & Heatmap</h4>
            <div style={{ display: "flex", gap: 16 }}>
              <div style={{ flex: 1, minHeight: 300 }}>
                <HistogramComp data={data} metric={"Likelihood"} />
              </div>
              <div style={{ flex: 1, minHeight: 300 }}>
                <HeatmapComp />
              </div>
            </div>
          </div>

          <div className="card neon-card">
            <h4 className="card-title">Project Timeline</h4>
            <GanttChartComp />
          </div>

        </div>
      )}

      {/* TABLE TAB */}
      {activeTab === "tables" && (
        <div className="card neon-card">
          <h4 className="card-title">Top Records</h4>

          <div className="table-wrap">
            <table className="neon-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Year</th>
                  <th>Country</th>
                  <th>Intensity</th>
                  <th>Likelihood</th>
                </tr>
              </thead>

              <tbody>
                {data.slice(0, 12).map((r, i) => (
                  <tr key={i}>
                    <td>{r.title || r.insight || "—"}</td>
                    <td>{r.Year || "—"}</td>
                    <td>{r.Country || "—"}</td>
                    <td>{r.Intensity}</td>
                    <td>{r.Likelihood}</td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>
      )}

      {/* REPORTS TAB */}
      {activeTab === "reports" && (
        <div className="card neon-card">
          <h4 className="card-title">Campaign & Summary</h4>

          <div className="reports-grid">

            <div className="report-item">
              <div className="report-title">Monthly Campaign</div>
              <div className="report-value">8.52k Visitors</div>
              <div className="report-mini">Emails opened: 8,734 • Clicks: 967</div>
            </div>

            <div className="report-item">
              <div className="report-title">Source Traffic</div>
              <div className="report-value">38.4k Visitors</div>
              <div className="report-mini">Direct: 1.2k • Social: 31.5k • Email: 893</div>
            </div>

            <div className="report-item">
              <div className="report-title">Project Progress</div>
              <div className="project-list">
                <div>Hoffman Website — 80%</div>
                <div>Blockchain Website — 92%</div>
                <div>Dojo Email App — 51%</div>
                <div>Foodista Mobile App — 8%</div>
                <div>Dashboard Design — 62%</div>
              </div>
            </div>

          </div>

        </div>
      )}

    </div>
  );
}
