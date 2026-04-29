// src/pages/RecordsPage.jsx
import React, { useEffect, useMemo, useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export default function RecordsPage() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  // filters
  const [year, setYear] = useState("");
  const [topic, setTopic] = useState("");
  const [sector, setSector] = useState("");
  const [region, setRegion] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [pest, setPest] = useState("");
  const [source, setSource] = useState("");
  const [swot, setSwot] = useState("");
  const [endYear, setEndYear] = useState("");

  useEffect(() => {
    // load from backend: implement API below
    setLoading(true);
    fetch("/api/records")
      .then((r) => r.json())
      .then((data) => {
        setRecords(data);
        setLoading(false);
      })
      .catch((e) => {
        console.error(e);
        setLoading(false);
      });
  }, []);

  // build unique options
  const opts = useMemo(() => {
    const o = {
      years: new Set(),
      topics: new Set(),
      sectors: new Set(),
      regions: new Set(),
      countries: new Set(),
      cities: new Set(),
      pSets: new Set(),
      sources: new Set(),
      swots: new Set(),
    };
    records.forEach((r) => {
      if (r.Year) o.years.add(String(r.Year));
      if (r.Topics) o.topics.add(r.Topics);
      if (r.Sector) o.sectors.add(r.Sector);
      if (r.Region) o.regions.add(r.Region);
      if (r.Country) o.countries.add(r.Country);
      if (r.City) o.cities.add(r.City);
      if (r.PEST) o.pSets.add(r.PEST);
      if (r.Source) o.sources.add(r.Source);
      if (r.SWOT) o.swots.add(r.SWOT);
    });
    return {
      years: [...o.years].sort(),
      topics: [...o.topics].sort(),
      sectors: [...o.sectors].sort(),
      regions: [...o.regions].sort(),
      countries: [...o.countries].sort(),
      cities: [...o.cities].sort(),
      pests: [...o.pSets].sort(),
      sources: [...o.sources].sort(),
      swots: [...o.swots].sort(),
    };
  }, [records]);

  // apply filters
  const filtered = records.filter((r) => {
    if (year && String(r.Year) !== String(year)) return false;
    if (endYear && Number(r.Year) > Number(endYear)) return false;
    if (topic && r.Topics !== topic) return false;
    if (sector && r.Sector !== sector) return false;
    if (region && r.Region !== region) return false;
    if (country && r.Country !== country) return false;
    if (city && r.City !== city) return false;
    if (pest && r.PEST !== pest) return false;
    if (source && r.Source !== source) return false;
    if (swot && r.SWOT !== swot) return false;
    return true;
  });

  // prepare charts data
  const intensityByYear = useMemo(() => {
    const map = {};
    filtered.forEach((r) => {
      const y = r.Year || "Unknown";
      map[y] = map[y] || { year: y, sumIntensity: 0, count: 0 };
      map[y].sumIntensity += Number(r.Intensity) || 0;
      map[y].count += 1;
    });
    return Object.values(map).sort((a, b) => (a.year > b.year ? 1 : -1));
  }, [filtered]);

  const topicsDistribution = useMemo(() => {
    const map = {};
    filtered.forEach((r) => {
      const t = r.Topics || "Unknown";
      map[t] = (map[t] || 0) + 1;
    });
    return Object.entries(map).map(([name, value]) => ({ name, value }));
  }, [filtered]);

  const countryDistribution = useMemo(() => {
    const map = {};
    filtered.forEach((r) => {
      const c = r.Country || "Unknown";
      map[c] = (map[c] || 0) + 1;
    });
    return Object.entries(map).map(([name, value]) => ({ name, value }));
  }, [filtered]);

  if (loading) return <div>Loading records...</div>;

  return (
    <div>
      <h2 className="page-title">Visualizations</h2>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 18 }}>
        <select value={year} onChange={(e) => setYear(e.target.value)}>
          <option value="">All Years</option>
          {opts.years.map((y) => <option key={y} value={y}>{y}</option>)}
        </select>

        <select value={endYear} onChange={(e) => setEndYear(e.target.value)}>
          <option value="">Any End Year</option>
          {opts.years.map((y) => <option key={y} value={y}>{y}</option>)}
        </select>

        <select value={topic} onChange={(e) => setTopic(e.target.value)}>
          <option value="">All Topics</option>
          {opts.topics.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>

        <select value={sector} onChange={(e) => setSector(e.target.value)}>
          <option value="">All Sectors</option>
          {opts.sectors.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>

        <select value={region} onChange={(e) => setRegion(e.target.value)}>
          <option value="">All Regions</option>
          {opts.regions.map((r) => <option key={r} value={r}>{r}</option>)}
        </select>

        <select value={source} onChange={(e) => setSource(e.target.value)}>
          <option value="">All Sources</option>
          {opts.sources.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>

        <select value={swot} onChange={(e) => setSwot(e.target.value)}>
          <option value="">All SWOT</option>
          {opts.swots.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 18 }}>
        <div className="card">
          <h3>Intensity by Year (avg)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={intensityByYear}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="sumIntensity" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h3>Topics Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={topicsDistribution} dataKey="value" nameKey="name" innerRadius={40} outerRadius={80} label>
                {topicsDistribution.map((_, idx) => <Cell key={idx} fill={["#8884d8","#82ca9d","#ffc658","#ff7f50","#a569bd"][idx % 5]} />)}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginTop: 18 }}>
        <div className="card">
          <h3>Country Distribution</h3>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie data={countryDistribution} dataKey="value" nameKey="name" outerRadius={80} label>
                {countryDistribution.map((_, idx) => <Cell key={idx} fill={["#06b6d4","#6366f1","#f59e0b","#ef4444"][idx % 4]} />)}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h3>Filtered Records</h3>
          <div style={{ maxHeight: 280, overflow: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead><tr><th>Year</th><th>Country</th><th>Topic</th><th>Intensity</th></tr></thead>
              <tbody>
                {filtered.slice(0, 100).map((r, idx) => (
                  <tr key={idx} style={{ borderBottom: "1px solid #eee" }}>
                    <td style={{ padding: 6 }}>{r.Year}</td>
                    <td style={{ padding: 6 }}>{r.Country}</td>
                    <td style={{ padding: 6 }}>{r.Topics}</td>
                    <td style={{ padding: 6 }}>{r.Intensity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  );
}
