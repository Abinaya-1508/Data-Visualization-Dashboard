// src/pages/CRM.jsx
import React from "react";
import "../dashboard.css";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

export default function CRM() {
  // KPI Cards
  const kpis = [
    { title: "Orders Last Week", value: "124k", change: "+12.6%", up: true },
    { title: "Sales Last Year", value: "175k", change: "-16.2%", up: false },
    { title: "Total Profit", value: "1.28k", change: "-12.2%", up: false },
    { title: "Total Sales", value: "$4,673", change: "+25.2%", up: true },
  ];

  // Revenue Chart
  const revenueData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Revenue ($)",
        data: [1200, 1900, 3000, 5000, 2300, 3400, 4200],
        backgroundColor: "rgba(75,192,192,0.6)",
      },
    ],
  };

  const revenueOptions = { responsive: true, plugins: { legend: { display: false } } };

  // Earning Reports Chart
  const earningsData = {
    labels: ["Orders", "Sales", "Profit", "Income"],
    datasets: [
      {
        label: "Yearly Earnings",
        data: [12000, 15000, 8000, 18000],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  // Pie Chart for Countries
  const countryData = {
    labels: ["United States", "Brazil", "India", "Australia", "France", "China"],
    datasets: [
      {
        data: [25.8, 6.2, 12.4, 11.9, 16.2, 14.8],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40"],
      },
    ],
  };

  // Active Projects
  const projects = [
    { name: "Laravel Ecommerce", progress: 65 },
    { name: "Figma App UI Kit", progress: 86 },
    { name: "VueJs Calendar App", progress: 90 },
    { name: "React Dashboard", progress: 37 },
    { name: "Bootstrap Website", progress: 22 },
    { name: "Sketch Website Design", progress: 29 },
  ];

  return (
    <div className="crm-page">
      <h2 className="page-title">CRM Dashboard</h2>

      {/* KPI Cards */}
      <div className="kpi-grid">
        {kpis.map((k, i) => (
          <div key={i} className="kpi-card">
            <h4>{k.title}</h4>
            <p className="kpi-value">{k.value}</p>
            <span className={`kpi-badge ${k.up ? "up" : "down"}`}>{k.change}</span>
          </div>
        ))}
      </div>

      {/* Revenue Chart */}
      <div className="chart-section">
        <h3>Revenue Growth (Weekly Report)</h3>
        <Bar data={revenueData} options={revenueOptions} />
      </div>

      {/* Earning Reports */}
      <div className="chart-section">
        <h3>Earning Reports (Yearly Overview)</h3>
        <Bar data={earningsData} options={{ responsive: true }} />
      </div>

      {/* Sales by Countries */}
      <div className="chart-section">
        <h3>Sales by Countries (Monthly)</h3>
        <div className="pie-container">
          <Pie data={countryData} />
        </div>
      </div>

      {/* Active Projects */}
      <div className="project-section">
        <h3>Active Projects</h3>
        {projects.map((p, i) => (
          <div key={i} className="project-row">
            <span>{p.name}</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${p.progress}%` }}></div>
            </div>
            <span className="progress-value">{p.progress}%</span>
          </div>
        ))}
      </div>

      {/* Last Transactions */}
      <div className="transactions-section">
        <h3>Last Transactions</h3>
        <ul>
          <li>*4230 - Credit Sent - 17 Mar 2022 - Verified +$1,678</li>
          <li>*5578 - Credit Sent - 12 Feb 2022 - Rejected -$839</li>
          <li>*4567 - Credit Sent - 28 Feb 2022 - Verified +$435</li>
          <li>*5699 - Credit Sent - 8 Jan 2022 - Pending +$2,345</li>
          <li>*5699 - Credit Sent - 8 Jan 2022 - Rejected -$234</li>
        </ul>
      </div>
    </div>
  );
}
