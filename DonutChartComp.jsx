import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Admin", value: 10 },
  { name: "Customer", value: 70 },
  { name: "Guest", value: 20 },
];

const COLORS = ["#14b8a6", "#6366f1", "#f43f5e"];

export default function DonutChartComp(){
  return (
    <div className="card" style={{ height:320 }}>
      <div style={{ marginBottom:8, fontWeight:700 }}>User Types</div>
      <ResponsiveContainer width="100%" height="85%">
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" innerRadius={50} outerRadius={80} paddingAngle={6} label>
            {data.map((entry, idx) => <Cell key={idx} fill={COLORS[idx % COLORS.length]} />)}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
