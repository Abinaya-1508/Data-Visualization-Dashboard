import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../styles/sidebar.css";

const Section = ({ title, items, level = 0 }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Auto-open if any child is active
  const isChildActive = items?.some((item) => {
    if (item.items) {
      return item.items.some((child) => location.pathname === child.to);
    }
    return location.pathname === item.to;
  });

  return (
    <div className={`sidebar-section level-${level} ${open || isChildActive ? "open" : ""}`}>
      <button className="section-title" onClick={() => setOpen(!open)}>
        {title} <span className="caret">{open || isChildActive ? "▾" : "▸"}</span>
      </button>

      {items && (
        <div className="section-items">
          {items.map((it) =>
            it.items ? (
              <Section key={it.title} title={it.title} items={it.items} level={level + 1} />
            ) : (
              <NavLink
                key={it.to}
                to={it.to}
                className={({ isActive }) => "nav-item " + (isActive ? "active" : "")}
              >
                {it.title}
              </NavLink>
            )
          )}
        </div>
      )}
    </div>
  );
};

const menu = [
  { title: "Admin", to: "/dashboard" },
  {
    title: "Dashboards",
    items: [
      { title: "Analytics", to: "/dashboards/analytics" },
      { title: "CRM", to: "/dashboards/crm" },
      { title: "Ecommerce", to: "/dashboards/ecommerce" },
      { title: "Academy", to: "/dashboards/academy" },
      { title: "Logistics", to: "/dashboards/logistics" },
    ],
  },
  {
    title: "Charts",
    items: [
      { title: "Charts", to: "/charts" },
      { title: "Others", to: "/charts/others" },
    ],
  },
];

export default function Sidebar({ onLogout }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">Admin Dashboard</div>

      <div className="sidebar-menu">
        {menu.map((m) =>
          m.items ? (
            <Section key={m.title} title={m.title} items={m.items} />
          ) : (
            <NavLink key={m.title} to={m.to || "#"} className="nav-item">
              {m.title}
            </NavLink>
          )
        )}
      </div>

      <button className="logout-btn" onClick={onLogout}>
        Logout
      </button>
    </aside>
  );
}
