// src/pages/Analytics.jsx
import React, { useState, useEffect } from "react";
import "../dashboard.css";
import AreaChartComp from "../components/AreaChartComp";
import PieChartComp from "../components/PieChartComp";
import BarChartComp from "../components/BarChartComp";
import MiniTable from "../components/MiniTable";

export default function Analytics() {
  const [hoverIndex, setHoverIndex] = useState(null);

  const countries = [
    { name: "United States", value: "25.8%" },
    { name: "Brazil", value: "6.2%" },
    { name: "India", value: "12.4%" },
    { name: "Australia", value: "11.9%" },
    { name: "France", value: "16.2%" },
    { name: "China", value: "14.8%" },
  ];

  // Listen to PieChart hover events
  useEffect(() => {
    const handler = (e) => setHoverIndex(e.detail);
    document.addEventListener("pieHover", handler);
    return () => document.removeEventListener("pieHover", handler);
  }, []);

  return (
    <div className="analytics-page">

      {/* ---------- PAGE TITLE ---------- */}
      <h2 className="page-title">Analytics Overview</h2>

      {/* ---------- KPI CARDS ---------- */}
      <div className="analytics-kpi-grid">
        {[
          { title: "Average Daily Sales", value: "$28,450" },
          { title: "Total Sales This Month", value: "$42.5k", trend: "+18.2%" },
          { title: "Orders", value: "6,440", trend: "+62.2%" },
          { title: "Visits", value: "12,749", trend: "+25.5%" },
        ].map((kpi, i) => (
          <div key={i} className="kpi-card">
            <h4>{kpi.title}</h4>
            <p className="kpi-value">{kpi.value}</p>
            {kpi.trend && <span className="kpi-badge up">{kpi.trend}</span>}
          </div>
        ))}
      </div>

      {/* ---------- SALES OVERVIEW CHART ---------- */}
      <div className="analytics-section">
        <h3 className="section-title">Sales Overview</h3>
        <AreaChartComp />
      </div>

      {/* ---------- EARNINGS GRID ---------- */}
      <div className="analytics-earnings-grid">
        <div className="earnings-card">
          <h3>Earnings Reports</h3>
          <p className="earning-value">$468</p>
          <span className="kpi-badge up">+4.2%</span>
          <p>You earned more compared to last week</p>
        </div>
        {[
          { title: "Earnings", value: "$545.69" },
          { title: "Profit", value: "$256.34" },
          { title: "Expense", value: "$74.19" },
        ].map((item, i) => (
          <div key={i} className="sub-earning-card">
            <h4>{item.title}</h4>
            <p className="value">{item.value}</p>
          </div>
        ))}
      </div>

      {/* ---------- SUPPORT TRACKER ---------- */}
      <div className="analytics-section">
        <h3 className="section-title">Support Tracker</h3>
        <BarChartComp />
      </div>

      {/* ---------- SALES BY COUNTRY ---------- */}
      <div className="analytics-country-grid">
        <div className="country-card">
          <h3>Sales by Countries</h3>
          <PieChartComp />
        </div>
        <div className="country-list">
          {countries.map((c, i) => (
            <div
              key={i}
              className={`country-row ${hoverIndex === i ? "hovered" : ""}`}
              title={`${c.name} ${c.value}`}
            >
              <span>{c.name}</span>
              <strong>{c.value}</strong>
            </div>
          ))}
        </div>
      </div>

      {/* ---------- MINI TABLE ---------- */}
      <div className="analytics-section">
        <h3 className="section-title">Project List</h3>
        <MiniTable />
      </div>

    </div>
  );
}
