// src/pages/Ecommerce.jsx
import React, { useState, useMemo } from "react";
import "../dashboard.css";

import AreaChartComp from "../components/AreaChartComp";
import BarChartComp from "../components/BarChartComp";
import PieChartComp from "../components/PieChartComp";

/* Sample data (replace with API data if you have it) */
const sampleProducts = [
  { id: 1, name: "Apple iPhone 13", sku: "FXZ-4567", price: 999.29, sales: 320, stock: 24, category: "Electronics" },
  { id: 2, name: "Nike Air Jordan", sku: "FXZ-3456", price: 72.4, sales: 210, stock: 120, category: "Footwear" },
  { id: 3, name: "Beats Studio 2", sku: "FXZ-9485", price: 99.0, sales: 95, stock: 40, category: "Electronics" },
  { id: 4, name: "Apple Watch Series 7", sku: "FXZ-2345", price: 249.99, sales: 140, stock: 15, category: "Wearables" },
  { id: 5, name: "Amazon Echo Dot", sku: "FXZ-8959", price: 79.4, sales: 180, stock: 65, category: "Electronics" },
  { id: 6, name: "Play Station Console", sku: "FXZ-7892", price: 129.48, sales: 60, stock: 8, category: "Gaming" },
];

const sampleTransactions = [
  { id: "TX4230", type: "Credit", status: "Verified", date: "17 Mar 2022", amount: 1678, user: "John D." },
  { id: "TX5578", type: "Credit", status: "Rejected", date: "12 Feb 2022", amount: -839, user: "Mary R." },
  { id: "TX4567", type: "Credit", status: "Verified", date: "28 Feb 2022", amount: 435, user: "Carlos S." },
  { id: "TX5699", type: "Credit", status: "Pending", date: "08 Jan 2022", amount: 2345, user: "Alex P." },
  { id: "TX5698", type: "Refund", status: "Verified", date: "02 Jan 2022", amount: 98, user: "Lena W." },
];

function StatCard({ title, subtitle, value, delta, accent }) {
  return (
    <div className="ec-stat-card">
      <div className="ec-stat-left">
        <div className="ec-stat-title">{title}</div>
        <div className="ec-stat-sub">{subtitle}</div>
      </div>
      <div className="ec-stat-right">
        <div className={`ec-stat-value ${accent || ""}`}>{value}</div>
        {delta && <div className={`ec-stat-delta ${delta.startsWith("+") ? "up" : "down"}`}>{delta}</div>}
      </div>
    </div>
  );
}

function ProductCard({ p, onAddToCart }) {
  return (
    <div className="ec-product-card" role="article">
      <div className="ec-product-image" aria-hidden>
        <div className="ec-image-placeholder" title={p.name}>
          {p.name.split(" ").slice(0,2).map(w => w[0]).join("")}
        </div>
      </div>
      <div className="ec-product-body">
        <div className="ec-prod-title">{p.name}</div>
        <div className="ec-prod-sku">SKU: {p.sku}</div>
        <div className="ec-prod-meta">
          <span className="ec-price">${p.price.toLocaleString()}</span>
          <span className="ec-sales">{p.sales} sold</span>
        </div>
        <div className="ec-product-actions">
          <button className="btn-outline" onClick={() => onAddToCart(p)}>Add to Cart</button>
          <button className="btn-ghost">View</button>
        </div>
      </div>
    </div>
  );
}

export default function Ecommerce() {
  const [products] = useState(sampleProducts);
  const [transactions] = useState(sampleTransactions);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("top-selling");
  const [cartCount, setCartCount] = useState(0);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const categories = useMemo(() => ["All", ...Array.from(new Set(products.map(p => p.category)))], [products]);

  const filtered = useMemo(() => {
    let list = products.filter(p =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.sku.toLowerCase().includes(query.toLowerCase())
    );
    if (category !== "All") list = list.filter(p => p.category === category);

    if (sort === "top-selling") list = list.slice().sort((a,b)=>b.sales - a.sales);
    if (sort === "price-high") list = list.slice().sort((a,b)=>b.price - a.price);
    if (sort === "price-low") list = list.slice().sort((a,b)=>a.price - b.price);

    return list;
  }, [products, query, category, sort]);

  const handleAddToCart = (p) => {
    setCartCount(c => c + 1);
    // small visual feedback
    setSelectedProductId(p.id);
    setTimeout(() => setSelectedProductId(null), 650);
  };

  // small datasets for charts (mock)
  const salesTrend = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      { label: "Sales", data: [8000, 12000, 9000, 15000, 18000, 24000], fill: true },
    ],
  };

  const revenueByCategory = {
    labels: categories.slice(1),
    datasets: [{ label: "Revenue", data: products.map(p => Math.round(p.sales * p.price/10)), backgroundColor: ["#ff7a7a","#7c4dff","#00c2a8","#ffb84d","#42a5f5"] }]
  };

  return (
    <div className="ecommerce-page">
      {/* header */}
      <div className="ec-header">
        <div>
          <h2 className="page-title">Congratulations Diya! 🎉</h2>
          <p className="page-sub">Best seller of the month</p>
        </div>

        <div className="ec-header-right">
          <div className="ec-quick-stats">
            <div className="ec-quick-item">
              <small>Sales</small>
              <div className="ec-quick-val">$48.9k</div>
            </div>
            <div className="ec-quick-item">
              <small>Customers</small>
              <div className="ec-quick-val">8.549k</div>
            </div>
          </div>

          <div className="cart-bubble" title="Cart items">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="cart-icon"><path d="M6 6h15l-1.5 9h-12L6 6z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <strong>{cartCount}</strong>
          </div>
        </div>
      </div>

      {/* stats row */}
      <div className="ec-stats-row">
        <StatCard title="Statistics" subtitle="Updated 1 month ago" value="230k" delta="+8.2%" />
        <StatCard title="Revenue" subtitle="This month" value="$9,745" delta="+6.1%" accent="accent" />
        <StatCard title="Profit (Last Month)" subtitle="Overview" value="624k" delta="+8.24%" />
        <StatCard title="Expenses" subtitle="Last Month" value="82.5k" delta="+2.2%" />
      </div>

      {/* main content */}
      <div className="ec-main-grid">

        {/* Left: charts & overview */}
        <div className="ec-left">

          <section className="ec-card ec-hero-card">
            <div className="ec-hero-left">
              <h3>Total Revenue</h3>
              <div className="ec-hero-value">$42,500 <span className="ec-small-muted">vs $38,000 last month</span></div>
              <div className="ec-hero-meta">Orders: 6,440 • Conversion: 3.2%</div>
            </div>
            <div className="ec-hero-chart">
              <AreaChartComp dataProp={salesTrend} />
            </div>
          </section>

          <div className="ec-charts-grid">
            <div className="ec-card">
              <h4>Revenue by Category</h4>
              <BarChartComp dataProp={revenueByCategory} />
            </div>

            <div className="ec-card">
              <h4>Sales Distribution</h4>
              <PieChartComp />
            </div>
          </div>

          <div className="ec-card ec-products-panel">
            <div className="ec-panel-header">
              <h4>Popular Products</h4>
              <div className="ec-panel-controls">
                <input className="ec-search" placeholder="Search product or SKU" value={query} onChange={e=>setQuery(e.target.value)} />
                <select value={category} onChange={e=>setCategory(e.target.value)}>
                  {categories.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <select value={sort} onChange={e=>setSort(e.target.value)}>
                  <option value="top-selling">Top selling</option>
                  <option value="price-high">Price (High)</option>
                  <option value="price-low">Price (Low)</option>
                </select>
              </div>
            </div>

            <div className="ec-products-grid">
              {filtered.map(p => (
                <div key={p.id} className={`ec-product-wrap ${selectedProductId === p.id ? "pulse" : ""}`}>
                  <ProductCard p={p} onAddToCart={handleAddToCart} />
                </div>
              ))}
              {filtered.length === 0 && <div className="empty-msg">No products found.</div>}
            </div>
          </div>
        </div>

        {/* Right: transactions, popular items & orders */}
        <aside className="ec-right">
          <div className="ec-card">
            <h4>Recent Transactions</h4>
            <div className="trans-list">
              {transactions.map(t => (
                <div key={t.id} className="trans-row">
                  <div className="trans-left">
                    <div className="trans-id">{t.id}</div>
                    <div className="trans-meta">{t.type} • {t.date}</div>
                  </div>
                  <div className={`trans-amt ${t.amount >= 0 ? "pos" : "neg"}`}>{t.amount >= 0 ? `+$${t.amount}` : `-$${Math.abs(t.amount)}`}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="ec-card">
            <h4>Orders by Countries</h4>
            <div className="country-list-compact">
              <div className="country-item"><span>United States</span><strong>25.8%</strong></div>
              <div className="country-item"><span>Brazil</span><strong>6.2%</strong></div>
              <div className="country-item"><span>India</span><strong>12.4%</strong></div>
              <div className="country-item"><span>Australia</span><strong>11.9%</strong></div>
              <div className="country-item"><span>France</span><strong>16.2%</strong></div>
              <div className="country-item"><span>China</span><strong>14.8%</strong></div>
            </div>
          </div>

          <div className="ec-card">
            <h4>Quick Actions</h4>
            <div className="quick-actions">
              <button className="btn-primary">Create Campaign</button>
              <button className="btn-ghost">Export CSV</button>
              <button className="btn-outline">Add Product</button>
            </div>
          </div>

        </aside>
      </div>

      <footer className="ec-footer">
        <small>© 2025 — Built with ❤️ — Dreamworld</small>
      </footer>
    </div>
  );
}
