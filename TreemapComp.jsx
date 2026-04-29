import React from "react";
import "../dashboard.css";

/**
 * Simple treemap using nested divs sized by value.
 * Accepts data = [{ name, value, color }]
 */
export default function TreemapComp({ data = null }) {
  const sample = [
    { name: "US", value: 45, color: "#7c4dff" },
    { name: "Brazil", value: 12, color: "#00e5ff" },
    { name: "India", value: 20, color: "#ff4081" },
    { name: "Australia", value: 9, color: "#ffc107" },
    { name: "China", value: 14, color: "#00c853" },
  ];

  const items = data && data.length ? data : sample;
  const total = items.reduce((s, it) => s + it.value, 0);

  return (
    <div className="card neon-card">
      <h4 className="card-title">Treemap (Sales by Country)</h4>
      <div className="treemap">
        {items.map((it, idx) => {
          const pct = Math.round((it.value / total) * 100);
          return (
            <div
              key={idx}
              className="treemap-item"
              style={{
                flex: it.value,
                background: it.color,
              }}
              title={`${it.name}: ${it.value} (${pct}%)`}
            >
              <div className="treemap-label">
                <strong>{it.name}</strong>
                <div>{it.value}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
