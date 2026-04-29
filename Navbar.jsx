import React from "react";

const Navbar = ({ onLogout }) => {
  return (
    <header className="top-navbar">
      <div className="nav-left">
        <h3 className="app-title">Analytics</h3>
      </div>

      <div className="nav-right">
        <div className="search">
          <input placeholder="Search..." />
        </div>
        <div className="profile">
          <button className="profile-btn" onClick={() => alert("Profile menu")}>Profile</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
