import { Cpu, Database, Gauge } from "lucide-react";
import "../styles/components.css";

function StatusBar() {
  return (
    <footer className="status-bar">
      <div>
        <Cpu size={15} />
        <span>GPU</span>
        <strong>ACTIVE</strong>
      </div>

      <div>
        <Database size={15} />
        <span>LiDAR</span>
        <strong>10 Hz</strong>
      </div>

      <div>
        <Gauge size={15} />
        <span>FPS</span>
        <strong>30</strong>
      </div>

      <div className="status-right">
        Adaptive Resolution · Simulation Mode
      </div>
    </footer>
  );
}

export default StatusBar;