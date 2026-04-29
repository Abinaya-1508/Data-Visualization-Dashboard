import React from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const sample = [
  { month: "Jan", val: 30 },
  { month: "Feb", val: 50 },
  { month: "Mar", val: 70 },
  { month: "Apr", val: 60 },
  { month: "May", val: 90 },
];

export default function AreaChartComp(){
  return (
    <div className="card" style={{ height:300 }}>
      <div style={{ marginBottom:8, fontWeight:700 }}>User Growth</div>
      <ResponsiveContainer width="100%" height="85%">
        <AreaChart data={sample}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="val" stroke="#06b6d4" fill="#e0f7fa" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
