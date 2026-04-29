import React from "react";
import "../dashboard.css";

/**
 * Heatmap: renders a grid NxM. Accepts grid: [[val,...],...]
 * If data empty, builds random sample.
 */
export default function HeatmapComp({ grid = null }) {
  const sampleGrid = Array.from({ length: 6 }, () =>
    Array.from({ length: 10 }, () => Math.round(Math.random() * 100))
  );
  const matrix = grid || sampleGrid;

  // compute min/max for color scale
  const flat = matrix.flat();
  const min = Math.min(...flat);
  const max = Math.max(...flat);

  const colorFor = (v) => {
    const t = (v - min) / (max - min || 1);
    // neon heat: blue -> purple -> pink -> yellow
    const r = Math.round(255 * t);
    const g = Math.round(50 + 100 * (1 - t));
    const b = Math.round(200 - 150 * t);
    return `rgba(${r},${g},${b},0.95)`;
  };

  return (
    <div className="card neon-card">
      <h4 className="card-title">Heatmap</h4>
      <div className="heatmap-grid">
        {matrix.map((row, i) => (
          <div className="heatmap-row" key={i}>
            {row.map((cell, j) => (
              <div
                key={j}
                className="heatmap-cell"
                style={{ background: colorFor(cell) }}
                title={`${cell}`}
              >
                <span className="heatmap-label">{cell}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
