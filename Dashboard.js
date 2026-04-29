import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

function Dashboard() {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    year: '',
    topics: '',
    sector: '',
    region: '',
    pest: '',
    source: '',
    swot: '',
    country: '',
    city: ''
  });

  useEffect(() => {
    fetch('http://localhost:5000/data')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.error(err));
  }, []);

  // Function to get unique values for dropdowns
  const uniqueValues = (field) => [...new Set(data.map(d => d[field]).filter(Boolean))];

  // Apply all filters
  const filteredData = data.filter(d => 
    (!filters.year || d.Year === parseInt(filters.year)) &&
    (!filters.topics || d.Topics === filters.topics) &&
    (!filters.sector || d.Sector === filters.sector) &&
    (!filters.region || d.Region === filters.region) &&
    (!filters.pest || d.PEST === filters.pest) &&
    (!filters.source || d.Source === filters.source) &&
    (!filters.swot || d.SWOT === filters.swot) &&
    (!filters.country || d.Country === filters.country) &&
    (!filters.city || d.City === filters.city)
  );

  // Chart data
  const chartData = {
    labels: filteredData.map(d => d.Year),
    datasets: [
      { label: 'Intensity', data: filteredData.map(d => d.Intensity), backgroundColor: 'rgba(75,192,192,0.6)' },
      { label: 'Likelihood', data: filteredData.map(d => d.Likelihood), backgroundColor: 'rgba(153,102,255,0.6)' },
      { label: 'Relevance', data: filteredData.map(d => d.Relevance), backgroundColor: 'rgba(255,159,64,0.6)' }
    ]
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Visualization Dashboard</h1>

      {/* Filters */}
      <div style={{ marginBottom: '20px' }}>
        {Object.keys(filters).map(f => (
          <span key={f} style={{ marginRight: '15px' }}>
            <label>{f.charAt(0).toUpperCase() + f.slice(1)}: </label>
            <select onChange={e => setFilters({...filters, [f]: e.target.value})}>
              <option value="">All</option>
              {uniqueValues(f).map(v => <option key={v}>{v}</option>)}
            </select>
          </span>
        ))}
      </div>

      {/* Chart */}
      <Bar data={chartData} options={{ responsive: true }} />
    </div>
  );
}

export default Dashboard;
