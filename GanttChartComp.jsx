import React from "react";
import "../dashboard.css";

/**
 * Simple Gantt: expects items array [{ name, start (0..100), end (0..100), color }]
 * If data not provided, uses sample tasks.
 */
export default function GanttChartComp({ items = null }) {
  const sample = [
    { name: "Hoffman Website", start: 5, end: 45, color: "#7c4dff" },
    { name: "Blockchain Website", start: 20, end: 60, color: "#00e5ff" },
    { name: "Dojo Email App", start: 40, end: 70, color: "#ff4081" },
    { name: "Foodista Mobile", start: 10, end: 30, color: "#ffc107" },
  ];

  const tasks = items && items.length ? items : sample;

  return (
    <div className="card neon-card">
      <h4 className="card-title">Project Timeline (Gantt)</h4>
      <div className="gantt">
        {tasks.map((t, i) => (
          <div key={i} className="gantt-row">
            <div className="gantt-label">{t.name}</div>
            <div className="gantt-bar-area">
              <div
                className="gantt-bar"
                style={{
                  left: `${t.start}%`,
                  width: `${Math.max(2, t.end - t.start)}%`,
                  background: t.color,
                }}
                title={`${t.name}: ${t.start}% → ${t.end}%`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
