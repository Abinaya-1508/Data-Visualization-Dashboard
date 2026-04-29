import React from "react";

const KpiCards = ({ kpis = [] }) => {
  return (
    <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:16, marginBottom:18 }}>
      {kpis.map((k, i) => (
        <div key={i} className="card">
          <div style={{ fontSize:12, color:"#6b7280" }}>{k.title}</div>
          <div style={{ fontSize:20, fontWeight:700, marginTop:6 }}>{k.value}</div>
        </div>
      ))}
    </div>
  );
};

export default KpiCards;
