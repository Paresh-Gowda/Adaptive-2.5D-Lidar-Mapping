import { Activity, Radio, Settings } from "lucide-react";
import "../styles/navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-brand">
        <div className="brand-icon">
          <Radio size={20} />
        </div>

        <div>
          <h1>AgniVeda</h1>
          <span>Adaptive 2.5D LiDAR Mapping</span>
        </div>
      </div>

      <div className="navbar-status">
        <div className="live-indicator">
          <span></span>
          SYSTEM ONLINE
        </div>

        <Activity size={19} />
        <Settings size={19} />
      </div>
    </header>
  );
}

export default Navbar;