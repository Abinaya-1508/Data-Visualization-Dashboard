import React from "react";
import { Bubble } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

export default function BubbleChartComp({ data = null }) {
  // sample fallback bubble data
  const fallback = [
    { x: 10, y: 20, r: 8 },
    { x: 15, y: 10, r: 12 },
    { x: 7, y: 25, r: 6 },
    { x: 20, y: 5, r: 14 },
  ];

  const datasetRaw =
    data && data.length
      ? data.slice(0, 6).map((d, i) => ({
          x: Number(d.Likelihood || d.likelihood || Math.random() * 30),
          y: Number(d.Intensity || d.intensity || Math.random() * 30),
          r:
            Math.max(
              3,
              Math.round(
                (Number(d.Relevance || d.relevance || 1) / 5) * 20
              )
            ) || Math.random() * 8 + 3,
        }))
      : fallback;

  const chartData = {
    datasets: [
      {
        label: "Records (bubble: relevance≈size)",
        data: datasetRaw,
        backgroundColor: "rgba(123, 31, 162, 0.6)", // neon purple
        borderColor: "rgba(123,31,162,0.9)",
        hoverBackgroundColor: "rgba(255,255,255,0.9)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { title: { display: true, text: "Likelihood" } },
      y: { title: { display: true, text: "Intensity" } },
    },
    plugins: {
      legend: { labels: { color: "#d1c4e9" } },
      tooltip: { enabled: true },
    },
  };

  return (
    <div className="card neon-card chart-fullheight">
      <h4 className="card-title">Bubble Chart</h4>
      <div className="chart-area">
        <Bubble data={chartData} options={options} />
      </div>
    </div>
  );
}
