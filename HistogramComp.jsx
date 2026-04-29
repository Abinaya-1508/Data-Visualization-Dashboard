import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function HistogramComp({ data = null, metric = "Intensity" }) {
  // create buckets example for histogram
  const raw = (data && data.length ? data : []).map((d) =>
    Number(d[metric] ?? d[metric.toLowerCase()] ?? 0)
  );

  const fallback = [1, 3, 2, 4, 5, 2, 1, 3];

  const values = raw.length ? raw : fallback;

  // build buckets (simple)
  const max = Math.max(...values, 10);
  const buckets = 8;
  const step = Math.ceil((max + 1) / buckets);
  const labels = Array.from({ length: buckets }, (_, i) => `${i * step}-${(i + 1) * step - 1}`);
  const counts = new Array(buckets).fill(0);
  values.forEach((v) => {
    const idx = Math.min(Math.floor(v / step), buckets - 1);
    counts[idx] += 1;
  });

  const chartData = {
    labels,
    datasets: [
      {
        label: `${metric} distribution`,
        data: counts,
        backgroundColor: "rgba(0, 229, 255, 0.7)", // neon cyan
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
  };

  return (
    <div className="card neon-card chart-medium">
      <h4 className="card-title">Histogram ({metric})</h4>
      <div className="chart-area">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
}
