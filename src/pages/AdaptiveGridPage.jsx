import { useEffect, useState } from "react";
import { Grid3X3, Cpu, Database, Layers3 } from "lucide-react";
import "../styles/adaptiveGrid.css";

const zones = [
  {
    range: "0–10 m",
    resolution: "5 cm",
    detail: "HIGH DETAIL",
    cells: "4,000+",
  },
  {
    range: "10–25 m",
    resolution: "10 cm",
    detail: "MEDIUM DETAIL",
    cells: "2,500+",
  },
  {
    range: "25–50 m",
    resolution: "25 cm",
    detail: "REDUCED DETAIL",
    cells: "1,400+",
  },
  {
    range: "50–100 m",
    resolution: "50 cm",
    detail: "LOW DETAIL",
    cells: "500+",
  },
];

function AdaptiveGridPage() {
  const [activeZone, setActiveZone] = useState(0);
  const [cells, setCells] = useState(8412);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveZone((prev) => (prev + 1) % 4);
      setCells(Math.floor(8200 + Math.random() * 500));
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="adaptive-page">
      <div className="page-heading">
        <div>
          <span className="eyebrow">MAPPING ENGINE</span>
          <h2>Adaptive Resolution Grid</h2>
          <p>
            Non-uniform spatial representation with finer resolution near the
            ego vehicle.
          </p>
        </div>

        <div className="engine-status">
          <span></span>
          GRID ENGINE ACTIVE
        </div>
      </div>

      <div className="adaptive-stats">
        <div className="adaptive-stat">
          <Grid3X3 size={20} />
          <div>
            <span>ACTIVE CELLS</span>
            <strong>{cells.toLocaleString()}</strong>
          </div>
        </div>

        <div className="adaptive-stat">
          <Cpu size={20} />
          <div>
            <span>PROCESSING MODE</span>
            <strong>ADAPTIVE</strong>
          </div>
        </div>

        <div className="adaptive-stat">
          <Database size={20} />
          <div>
            <span>MAP TYPE</span>
            <strong>2.5D</strong>
          </div>
        </div>

        <div className="adaptive-stat">
          <Layers3 size={20} />
          <div>
            <span>LAYERS</span>
            <strong>4</strong>
          </div>
        </div>
      </div>

      <div className="grid-layout">
        <div className="adaptive-visual card">
          <div className="card-title">
            <span>VARIABLE RESOLUTION VIEW</span>
            <small>SIMULATION</small>
          </div>

          <div className="adaptive-map">
            <div className="grid-zone-view zone-near">
              <span>5 cm</span>
            </div>

            <div className="grid-zone-view zone-mid">
              <span>10 cm</span>
            </div>

            <div className="grid-zone-view zone-far">
              <span>25 cm</span>
            </div>

            <div className="grid-zone-view zone-end">
              <span>50 cm</span>
            </div>

            <div className="grid-car">
              <div></div>
              <span>EGO</span>
            </div>

            <div className="grid-axis x-axis"></div>
            <div className="grid-axis y-axis"></div>
          </div>
        </div>

        <div className="resolution-list card">
          <div className="card-title">
            <span>PROPOSED RESOLUTION SCHEDULE</span>
          </div>

          {zones.map((zone, index) => (
            <div
              key={zone.range}
              className={`resolution-row ${
                activeZone === index ? "active" : ""
              }`}
            >
              <div className="zone-number">0{index + 1}</div>

              <div className="zone-info">
                <strong>{zone.range}</strong>
                <span>{zone.detail}</span>
              </div>

              <div className="zone-resolution">
                {zone.resolution}
              </div>

              <div className="zone-cells">
                {zone.cells}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="adaptive-principle card">
        <div>
          <span className="eyebrow">CORE PRINCIPLE</span>
          <h3>More detail where it matters.</h3>
          <p>
            The grid allocates smaller cells close to the vehicle and
            progressively larger cells as distance increases, reducing
            unnecessary spatial computation while retaining useful
            environment information.
          </p>
        </div>

        <div className="resolution-flow">
          <span>5 cm</span>
          <b>→</b>
          <span>10 cm</span>
          <b>→</b>
          <span>25 cm</span>
          <b>→</b>
          <span>50 cm</span>
        </div>
      </div>
    </section>
  );
}

export default AdaptiveGridPage;