import {
  LayoutDashboard,
  ScanLine,
  Grid3X3,
  Map,
  BarChart3,
  BookOpen,
} from "lucide-react";

import { NavLink } from "react-router-dom";

import "../styles/sidebar.css";

const menuItems = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    path: "/",
  },
  {
    icon: ScanLine,
    label: "Perception",
    path: "/perception",
  },
  {
    icon: Grid3X3,
    label: "Adaptive Grid",
    path: "/adaptive-grid",
  },
  {
    icon: Map,
    label: "2.5D Map",
    path: "/map",
  },
  {
    icon: BarChart3,
    label: "Analytics",
    path: "/analytics",
  },
  {
    icon: BookOpen,
    label: "References",
    path: "/references",
  },
];

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-label">
        NAVIGATION
      </div>

      <nav>
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `sidebar-item ${isActive ? "active" : ""}`
              }
            >
              <Icon size={19} />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="sidebar-project">
        <span>PROJECT</span>

        <strong>SIH26053</strong>

        <small>
          Smart Vehicles · DRDO
        </small>
      </div>

    </aside>
  );
}

export default Sidebar;