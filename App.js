import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// AUTH
import Login from "./auth/Login";
import PrivateRoute from "./auth/PrivateRoute";

// PAGES
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Analytics from "./pages/Analytics";
import CRM from "./pages/CRM";
import GenericPage from "./pages/GenericPage";
import Charts from "./pages/Charts";
import Ecommerce from "./pages/Ecommerce";
import Academy from "./pages/Academy";
import Logistics from "./pages/Logistics";
import Others from "./pages/Others";
// COMPONENTS
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

// STYLES
import "./styles/sidebar.css";
import "./styles/navbar.css";
import "./dashboard.css";   // Option B → dashboard.css directly inside src/

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // CHECK LOCAL STORAGE IF ALREADY LOGGED IN
  useEffect(() => {
    const stored = localStorage.getItem("isAuth");
    setIsAuthenticated(stored === "true");
  }, []);

  // LOGIN HANDLER
  const handleLogin = () => {
    localStorage.setItem("isAuth", "true");
    setIsAuthenticated(true);
  };

  // LOGOUT HANDLER
  const handleLogout = () => {
    localStorage.removeItem("isAuth");
    setIsAuthenticated(false);
  };

  return (
    <Router>
      {!isAuthenticated ? (
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      ) : (
        <div className="app-layout">
          <Sidebar onLogout={handleLogout} />

          <div className="main-area">
            <Navbar onLogout={handleLogout} />

            <div className="main-content">
              <Routes>
                {/* Dashboards */}
                <Route
                  path="/"
                  element={
                    <PrivateRoute>
                      <Dashboard />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="/dashboard"
                  element={
                    <PrivateRoute>
                      <Dashboard />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="/dashboards/analytics"
                  element={
                    <PrivateRoute>
                      <Analytics />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="/dashboards/crm"
                  element={
                    <PrivateRoute>
                      <CRM />
                    </PrivateRoute>
                  }
                />

                <Route
  path="/dashboards/ecommerce"
  element={
    <PrivateRoute>
      <Ecommerce />
    </PrivateRoute>
  }
/>


                <Route
  path="/dashboards/academy"
  element={
    <PrivateRoute>
      <Academy />
    </PrivateRoute>
  }
/>


                <Route
                  path="/dashboards/logistics"
                  element={
                    <PrivateRoute>
                      <Logistics />
                    </PrivateRoute>
                  }
                />

                {/* Charts */}
                <Route
                  path="/charts"
                  element={
                    <PrivateRoute>
                      <Charts />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="/charts/others"
                  element={
                    <PrivateRoute>
                      <Others />
                    </PrivateRoute>
                  }
                />

                {/* Front Pages */}
                <Route
                  path="/pages/apps-and-pages"
                  element={
                    <PrivateRoute>
                      <GenericPage title="Apps & Pages" />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="/pages/ecommerce/shop"
                  element={
                    <PrivateRoute>
                      <GenericPage title="Shop" />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="/pages/ecommerce/product"
                  element={
                    <PrivateRoute>
                      <GenericPage title="Product" />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="/apps/email"
                  element={
                    <PrivateRoute>
                      <GenericPage title="Email App" />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="/apps/chat"
                  element={
                    <PrivateRoute>
                      <GenericPage title="Chat App" />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="/apps/calendar"
                  element={
                    <PrivateRoute>
                      <GenericPage title="Calendar App" />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="/apps/kanban"
                  element={
                    <PrivateRoute>
                      <GenericPage title="Kanban Board" />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="/apps/invoice"
                  element={
                    <PrivateRoute>
                      <GenericPage title="Invoice App" />
                    </PrivateRoute>
                  }
                />

                {/* UI Elements */}
                <Route
                  path="/ui/typography"
                  element={
                    <PrivateRoute>
                      <GenericPage title="Typography" />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="/ui/icons"
                  element={
                    <PrivateRoute>
                      <GenericPage title="Icons" />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="/ui/cards"
                  element={
                    <PrivateRoute>
                      <GenericPage title="Cards" />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="/ui/components"
                  element={
                    <PrivateRoute>
                      <GenericPage title="Components" />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="/ui/extensions"
                  element={
                    <PrivateRoute>
                      <GenericPage title="Extensions" />
                    </PrivateRoute>
                  }
                />

                {/* Forms */}
                <Route
                  path="/forms/elements"
                  element={
                    <PrivateRoute>
                      <GenericPage title="Form Elements" />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="/forms/layouts"
                  element={
                    <PrivateRoute>
                      <GenericPage title="Form Layouts" />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="/forms/wizard"
                  element={
                    <PrivateRoute>
                      <GenericPage title="Form Wizard" />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="/forms/validation"
                  element={
                    <PrivateRoute>
                      <GenericPage title="Form Validation" />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="/tables"
                  element={
                    <PrivateRoute>
                      <GenericPage title="Tables" />
                    </PrivateRoute>
                  }
                />

                {/* Pages & Docs */}
                <Route
                  path="/pages/access-control"
                  element={
                    <PrivateRoute>
                      <GenericPage title="Access Control" />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="/pages/nav-levels"
                  element={
                    <PrivateRoute>
                      <GenericPage title="Nav Levels" />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="/pages/disabled"
                  element={
                    <PrivateRoute>
                      <GenericPage title="Disabled Menu" />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="/pages/support"
                  element={
                    <PrivateRoute>
                      <GenericPage title="Raise Support" />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="/pages/docs"
                  element={
                    <PrivateRoute>
                      <GenericPage title="Documentation" />
                    </PrivateRoute>
                  }
                />

                {/* Profile */}
                <Route
                  path="/profile"
                  element={
                    <PrivateRoute>
                      <Profile />
                    </PrivateRoute>
                  }
                />

                {/* Fallback */}
                <Route
                  path="*"
                  element={<Navigate to="/dashboard" replace />}
                />
              </Routes>
            </div>
          </div>
        </div>
      )}
    </Router>
  );
}
