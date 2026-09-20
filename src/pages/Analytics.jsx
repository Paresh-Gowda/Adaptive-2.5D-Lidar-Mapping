import { useEffect, useState } from "react";
import {
  Activity,
  Cpu,
  Database,
  Gauge,
  Clock3,
  Layers3,
} from "lucide-react";
import "../styles/analytics.css";

function Analytics() {
  const [fps, setFps] = useState(30);
  const [latency, setLatency] = useState(31);
  const [memory, setMemory] = useState(42);

  useEffect(() => {
    const interval = setInterval(() => {
      setFps(28 + Math.floor(Math.random() * 5));
      setLatency(28 + Math.floor(Math.random() * 8));
      setMemory(40 + Math.floor(Math.random() * 8));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="analytics-page">
      <div className="page-heading">
        <div>
          <span className="eyebrow">SYSTEM PERFORMANCE</span>
          <h2>Analytics & Benchmarks</h2>
          <p>
            Simulation metrics for the adaptive LiDAR mapping pipeline.
          </p>
        </div>

        <div className="analytics-status">
          <span></span>
          LIVE SIMULATION
        </div>
      </div>

      <div className="analytics-stats">
        <Metric
          icon={<Gauge size={20} />}
          label="THROUGHPUT"
          value={`${fps} FPS`}
        />

        <Metric
          icon={<Clock3 size={20} />}
          label="PIPELINE LATENCY"
          value={`${latency} ms`}
        />

        <Metric
          icon={<Database size={20} />}
          label="MEMORY LOAD"
          value={`${memory}%`}
        />

        <Metric
          icon={<Layers3 size={20} />}
          label="ACTIVE CELLS"
          value="8,412"
        />
      </div>

      <div className="analytics-grid">
        <div className="analytics-card">
          <div className="analytics-card-header">
            <span>PROCESSING PIPELINE</span>
            <small>LIVE</small>
          </div>

          <div className="pipeline-bars">
            <Bar label="LiDAR Input" value={72} />
            <Bar label="Pre-processing" value={48} />
            <Bar label="AI Segmentation" value={81} />
            <Bar label="Adaptive Grid" value={57} />
            <Bar label="2.5D Map Generation" value={63} />
          </div>
        </div>

        <div className="analytics-card">
          <div className="analytics-card-header">
            <span>PERCEPTION QUALITY</span>
            <small>SIMULATED</small>
          </div>

          <div className="quality-list">
            <Quality label="Drivable Terrain" value="95.2%" />
            <Quality label="Vehicle Detection" value="96.1%" />
            <Quality label="Pedestrian Detection" value="93.4%" />
            <Quality label="Static Obstacles" value="97.0%" />
          </div>
        </div>
      </div>

      <div className="benchmark-card">
        <div className="analytics-card-header">
          <span>UNIFORM vs ADAPTIVE REPRESENTATION</span>
          <small>CONCEPTUAL COMPARISON</small>
        </div>

        <div className="benchmark-grid">
          <div className="benchmark-column">
            <h3>Uniform High Resolution</h3>

            <BenchmarkRow
              label="Near-field detail"
              value="High"
              width="92%"
            />

            <BenchmarkRow
              label="Far-field detail"
              value="High"
              width="92%"
            />

            <BenchmarkRow
              label="Spatial cells"
              value="High"
              width="95%"
            />

            <BenchmarkRow
              label="Processing demand"
              value="High"
              width="90%"
            />
          </div>

          <div className="benchmark-column adaptive-column">
            <h3>Adaptive Resolution</h3>

            <BenchmarkRow
              label="Near-field detail"
              value="High"
              width="92%"
            />

            <BenchmarkRow
              label="Far-field detail"
              value="Reduced"
              width="48%"
            />

            <BenchmarkRow
              label="Spatial cells"
              value="Adaptive"
              width="55%"
            />

            <BenchmarkRow
              label="Processing demand"
              value="Target: Reduced"
              width="52%"
            />
          </div>
        </div>

        <div className="benchmark-note">
          <Activity size={17} />
          <span>
            Values shown here are simulation/demo indicators. Actual
            performance will be validated against a uniform-resolution
            baseline using measured benchmark results.
          </span>
        </div>
      </div>
    </section>
  );
}

function Metric({ icon, label, value }) {
  return (
    <div className="analytics-stat">
      {icon}

      <div>
        <span>{label}</span>
        <strong>{value}</strong>
      </div>
    </div>
  );
}

function Bar({ label, value }) {
  return (
    <div className="pipeline-bar">
      <div className="bar-label">
        <span>{label}</span>
        <strong>{value}%</strong>
      </div>

      <div className="bar-track">
        <div style={{ width: `${value}%` }}></div>
      </div>
    </div>
  );
}

function Quality({ label, value }) {
  return (
    <div className="quality-row">
      <div>
        <span>{label}</span>
        <strong>{value}</strong>
      </div>

      <div className="quality-track">
        <div style={{ width: value }}></div>
      </div>
    </div>
  );
}

function BenchmarkRow({ label, value, width }) {
  return (
    <div className="benchmark-row">
      <div>
        <span>{label}</span>
        <strong>{value}</strong>
      </div>

      <div className="benchmark-track">
        <div style={{ width }}></div>
      </div>
    </div>
  );
}

export default Analytics;