// src/components/D3LineChart.jsx
import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

export default function D3LineChart({ width = 500, height = 300, data }) {
  const ref = useRef();

  useEffect(() => {
    if (!data || data.length === 0) return;

    const svg = d3.select(ref.current);
    svg.selectAll("*").remove(); // clear previous

    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const w = width - margin.left - margin.right;
    const h = height - margin.top - margin.bottom;

    const x = d3.scaleLinear()
      .domain(d3.extent(data, d => d.x))
      .range([0, w]);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.y)])
      .range([h, 0]);

    const line = d3.line()
      .x(d => x(d.x))
      .y(d => y(d.y));

    const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

    g.append("g")
      .attr("transform", `translate(0,${h})`)
      .call(d3.axisBottom(x));

    g.append("g")
      .call(d3.axisLeft(y));

    g.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 2)
      .attr("d", line);
  }, [data, width, height]);

  return <svg ref={ref} width={width} height={height}></svg>;
}
