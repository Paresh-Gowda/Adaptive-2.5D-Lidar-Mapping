import { useEffect, useState } from "react";
import { Car, Radio, Layers3, Navigation, CircleDot } from "lucide-react";
import SemanticMap from "../components/SemanticMap";
import "../styles/dashboard.css";
function Dashboard() {
  const [speed, setSpeed] = useState(12.4);
  const [points, setPoints] = useState(48620);
  const [scan, setScan] = useState(0);
  const [vehicleX, setVehicleX] = useState(55);
  const [pedestrianY, setPedestrianY] = useState(47);

  useEffect(() => {
  const interval = setInterval(() => {
    setSpeed((prev) => {
      const next = prev + (Math.random() - 0.5) * 1.2;
      return Math.max(8, Math.min(18, next));
    });

    setPoints(Math.floor(47000 + Math.random() * 5000));

    setScan((prev) => (prev + 12) % 360);

    setVehicleX((prev) => {
      const next = prev + 0.7;
      return next > 68 ? 48 : next;
    });

    setPedestrianY((prev) => {
      const next = prev + 0.4;
      return next > 56 ? 42 : next;
    });
  }, 500);

  return () => clearInterval(interval);
}, []);

  return (
    <section className="dashboard">

      {/* HEADER */}
      <div className="page-heading">
        <div>
          <p className="eyebrow">REAL-TIME PERCEPTION</p>

          <h2>LiDAR Environment Dashboard</h2>

          <p className="heading-description">
            Simulated autonomous vehicle perception using adaptive
            variable-resolution 2.5D mapping.
          </p>
        </div>

        <div className="simulation-badge">
          <CircleDot size={14} />
          SIMULATION
        </div>
      </div>

      <div className="dashboard-grid">
        {/* MAIN SCENE */}
        <div className="scene-card">
          <div className="card-header">
            <div>
              <span>LIVE SCENE</span>
              <h3>Adaptive LiDAR View</h3>
            </div>

            <div className="scene-info">
              <Radio size={15} />
              SCAN {scan}°
            </div>
          </div>

          <div className="lidar-scene">
            {/* ROAD */}
            <div className="road">
              <div className="road-line"></div>
            </div>

            {/* ADAPTIVE RESOLUTION */}
            <div className="grid-zone near-zone"></div>
            <div className="grid-zone mid-zone"></div>
            <div className="grid-zone far-zone"></div>

            {/* LI​DAR SCANNING BEAM */}
            <div
              className="lidar-sweep"
              style={{
                transform: `rotate(${scan}deg)`,
              }}
            ></div>

            {/* SCAN ORIGIN */}
            <div className="lidar-origin"></div>

            {/* SIMULATED LI​DAR POINT CLOUD */}
            <div className="lidar-points">
              {Array.from({ length: 90 }).map((_, index) => {
                const angle = (index * 137.5) % 360;

                const distance = 10 + ((index * 23) % 78);

                const x =
                  50 + Math.cos((angle * Math.PI) / 180) * (distance * 0.42);

                const y =
                  55 + Math.sin((angle * Math.PI) / 180) * (distance * 0.48);

                const angleDifference = Math.abs(
                  ((angle - scan + 540) % 360) - 180,
                );

                return (
                  <i
                    key={index}
                    className={angleDifference < 12 ? "scan-hit" : ""}
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                    }}
                  />
                );
              })}
            </div>

            {/* DETECTED VEHICLE */}
            <div
              className="object vehicle-object"
              style={{ left: `${vehicleX}%` }}
            >
              <Car size={28} />
              <span>VEHICLE</span>
            </div>

            <div
              className="object pedestrian-object"
              style={{ top: `${pedestrianY}%` }}
            >
              <Navigation size={20} />
              <span>PEDESTRIAN</span>
            </div>

            {/* EGO VEHICLE */}
            <div
              className="ego-vehicle moving"
              style={{
                transform: `translateX(-50%) translateY(${
                  Math.sin(scan * 0.03) * 10
                }px)`,
              }}
            >
              <Car size={34} />
              <span>EGO</span>
            </div>

            {/* DISTANCE MARKERS */}
            <div className="range-label range-10">10 m</div>

            <div className="range-label range-50">50 m</div>

            <div className="range-label range-100">100 m</div>
          </div>
        </div>

        {/* METRICS */}
        <div className="side-metrics">
          <Metric
            icon={<Car size={18} />}
            label="EGO VEHICLE"
            value={`${speed.toFixed(1)} km/h`}
            detail="MOVING"
          />

          <Metric
            icon={<Radio size={18} />}
            label="POINT CLOUD"
            value={points.toLocaleString()}
            detail="points / frame"
          />

          <Metric
            icon={<Layers3 size={18} />}
            label="MAP CELLS"
            value="8,412"
            detail="adaptive cells"
          />

          <Metric
            icon={<Navigation size={18} />}
            label="DETECTION"
            value="ACTIVE"
            detail="6 objects"
          />

          {/* ADAPTIVE RESOLUTION */}

          <div className="resolution-card">
            <div className="resolution-header">
              <Layers3 size={16} />
              <span>ADAPTIVE RESOLUTION</span>
            </div>

            <div className="resolution-zone near">
              <div>
                <strong>0–10 m</strong>
                <small>HIGH DETAIL</small>
              </div>

              <b>5 cm</b>
            </div>

            <div className="resolution-zone">
              <div>
                <strong>10–25 m</strong>
                <small>MEDIUM DETAIL</small>
              </div>

              <b>10 cm</b>
            </div>

            <div className="resolution-zone">
              <div>
                <strong>25–50 m</strong>
                <small>REDUCED DETAIL</small>
              </div>

              <b>25 cm</b>
            </div>

            <div className="resolution-zone far">
              <div>
                <strong>50–100 m</strong>
                <small>LOW DETAIL</small>
              </div>

              <b>50 cm</b>
            </div>
          </div>
        </div>
      </div>
      <SemanticMap />
    </section>
  );
}

function Metric({ icon, label, value, detail }) {
  return (
    <div className="metric-card">
      <div className="metric-icon">{icon}</div>

      <div>
        <span>{label}</span>
        <strong>{value}</strong>
        <small>{detail}</small>
      </div>
    </div>
  );
}

export default Dashboard;
