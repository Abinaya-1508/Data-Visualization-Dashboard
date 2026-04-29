import React from "react";
import { Scatter } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

export default function ScatterPlotComp({ data = null }) {
  const fallback = Array.from({ length: 20 }, (_, i) => ({
    x: Math.random() * 30,
    y: Math.random() * 30,
  }));

  const pts =
    data && data.length
      ? data.slice(0, 30).map((d) => ({
          x: Number(d.Intensity ?? d.intensity ?? Math.random() * 30),
          y: Number(d.Relevance ?? d.relevance ?? Math.random() * 30),
        }))
      : fallback;

  const chartData = {
    datasets: [
      {
        label: "Intensity vs Relevance",
        data: pts,
        pointBackgroundColor: "rgba(255, 64, 129, 0.85)", // neon pink
        pointRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { labels: { color: "#e1bee7" } } },
  };

  return (
    <div className="card neon-card chart-fullheight">
      <h4 className="card-title">Scatter Plot</h4>
      <div className="chart-area">
        <Scatter data={chartData} options={options} />
      </div>
    </div>
  );
}
