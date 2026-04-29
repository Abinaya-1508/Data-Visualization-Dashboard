import { Line } from "react-chartjs-2";

export default function TrendLineChart({ data }) {
  return (
    <Line
      data={{
        labels: data.map((d) => d.Year),
        datasets: [
          {
            label: "Intensity Trend",
            data: data.map((d) => d.Intensity),
            borderColor: "#3b82f6",
            tension: 0.4,
          },
        ],
      }}
    />
  );
}
