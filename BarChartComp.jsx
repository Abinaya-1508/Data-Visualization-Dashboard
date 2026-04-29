import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const sample = [
  { name: "2018", value: 240 },
  { name: "2019", value: 300 },
  { name: "2020", value: 200 },
  { name: "2021", value: 350 },
  { name: "2022", value: 400 },
];

export default function BarChartComp(){
  return (
    <div className="card" style={{ height:320 }}>
      <div style={{ marginBottom:8, fontWeight:700 }}>Revenue by Year</div>
      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={sample}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#06b6d4" radius={[6,6,0,0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
