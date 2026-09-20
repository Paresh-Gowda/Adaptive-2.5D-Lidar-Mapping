import {
  Car,
  PersonStanding,
  Construction,
  Mountain,
  Activity,
} from "lucide-react";

import "../styles/perception.css";

const detections = [
  {
    type: "VEHICLE",
    count: 3,
    confidence: "96%",
    icon: Car,
    status: "DYNAMIC",
  },
  {
    type: "PEDESTRIAN",
    count: 2,
    confidence: "93%",
    icon: PersonStanding,
    status: "DYNAMIC",
  },
  {
    type: "WALL / BARRIER",
    count: 4,
    confidence: "97%",
    icon: Construction,
    status: "STATIC",
  },
  {
    type: "TERRAIN",
    count: 1,
    confidence: "95%",
    icon: Mountain,
    status: "STATIC",
  },
];

function Perception() {
  return (
    <section className="perception-page">

      <div className="perception-heading">
        <div>
          <p className="eyebrow">AI PERCEPTION</p>

          <h2>Environment Understanding</h2>

          <p>
            Simulated semantic perception from the LiDAR point cloud.
          </p>
        </div>

        <div className="model-status">
          <Activity size={15} />
          MODEL ACTIVE
        </div>
      </div>

      {/* TERRAIN */}

      <div className="perception-grid">

        <div className="terrain-card">

          <div className="perception-card-header">
            <div>
              <span>SEMANTIC SEGMENTATION</span>
              <h3>Terrain Classification</h3>
            </div>

            <strong>95.2%</strong>
          </div>

          <div className="terrain-view">

            <div className="terrain-road">
              <span>DRIVABLE</span>
            </div>

            <div className="terrain-side left">
              <span>NON-DRIVABLE</span>
            </div>

            <div className="terrain-side right">
              <span>NON-DRIVABLE</span>
            </div>

            <div className="terrain-scan-line"></div>

            <div className="terrain-ego">
              <Car size={25} />
            </div>

          </div>

          <div className="terrain-footer">
            <div>
              <i className="drive-dot"></i>
              Drivable Terrain
            </div>

            <div>
              <i className="non-drive-dot"></i>
              Non-drivable Terrain
            </div>
          </div>

        </div>

        {/* DETECTIONS */}

        <div className="detections-card">

          <div className="perception-card-header">
            <div>
              <span>OBJECT DETECTION</span>
              <h3>Detected Objects</h3>
            </div>

            <span className="detection-count">
              10 OBJECTS
            </span>
          </div>

          <div className="detection-list">

            {detections.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  className="detection-row"
                  key={item.type}
                >
                  <div className="detection-icon">
                    <Icon size={19} />
                  </div>

                  <div className="detection-info">
                    <strong>{item.type}</strong>
                    <small>
                      {item.status} · {item.count} detected
                    </small>
                  </div>

                  <div className="confidence">
                    <span>{item.confidence}</span>
                    <div>
                      <i
                        style={{
                          width: item.confidence,
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}

          </div>

        </div>

      </div>

      {/* PIPELINE */}

      <div className="perception-pipeline">

        <div className="pipeline-title">
          PERCEPTION PIPELINE
        </div>

        <div className="pipeline-flow">

          <PipelineStep
            number="01"
            title="LiDAR Input"
            text="Raw 3D points"
          />

          <div className="pipeline-arrow">→</div>

          <PipelineStep
            number="02"
            title="Pre-processing"
            text="Filtering"
          />

          <div className="pipeline-arrow">→</div>

          <PipelineStep
            number="03"
            title="AI Model"
            text="Semantic classes"
          />

          <div className="pipeline-arrow">→</div>

          <PipelineStep
            number="04"
            title="2.5D Map"
            text="Elevation + semantics"
          />

        </div>

      </div>

    </section>
  );
}

function PipelineStep({ number, title, text }) {
  return (
    <div className="pipeline-step">
      <span>{number}</span>
      <strong>{title}</strong>
      <small>{text}</small>
    </div>
  );
}

export default Perception;