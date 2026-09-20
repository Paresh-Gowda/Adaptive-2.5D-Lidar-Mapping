import {
  LayoutDashboard,
  ScanLine,
  Grid3X3,
  Map,
  BarChart3,
  BookOpen,
} from "lucide-react";

import "../styles/sidebar.css";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: ScanLine, label: "Perception" },
  { icon: Grid3X3, label: "Adaptive Grid" },
  { icon: Map, label: "2.5D Map" },
  { icon: BarChart3, label: "Analytics" },
  { icon: BookOpen, label: "References" },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-label">NAVIGATION</div>

      <nav>
        {menuItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              className={`sidebar-item ${index === 0 ? "active" : ""}`}
            >
              <Icon size={19} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="sidebar-project">
        <span>PROJECT</span>
        <strong>SIH26053</strong>
        <small>Smart Vehicles · DRDO</small>
      </div>
    </aside>
  );
}

export default Sidebar;