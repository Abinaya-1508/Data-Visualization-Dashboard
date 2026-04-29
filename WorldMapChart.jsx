import Plot from "react-plotly.js";

export default function WorldMapChart({ data }) {
  return (
    <Plot
      data={[
        {
          type: "choropleth",
          locations: data.map((d) => d.Country),
          locationmode: "country names",
          z: data.map((d) => d.Intensity),
        },
      ]}
      layout={{ geo: { projection: { type: "equirectangular" } }, height: 450 }}
    />
  );
}
