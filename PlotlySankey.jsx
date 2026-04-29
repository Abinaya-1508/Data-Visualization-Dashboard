// src/components/PlotlySankey.jsx
import React from "react";
import Plot from "react-plotly.js";

export default function PlotlySankey() {
  const data = [{
    type: "sankey",
    orientation: "h",
    node: {
      pad: 15,
      thickness: 20,
      line: { color: "black", width: 0.5 },
      label: ["Source A", "Source B", "Target X", "Target Y"],
      color: ["blue", "green", "red", "orange"]
    },
    link: {
      source: [0, 1, 0, 1],
      target: [2, 2, 3, 3],
      value: [8, 4, 2, 8]
    }
  }];

  const layout = { title: "Sankey Chart Example", font: { size: 12 } };

  return <Plot data={data} layout={layout} style={{ width: "100%", height: "400px" }} />;
}
