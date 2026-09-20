import { useEffect, useState } from "react";
import { Map, Mountain, Car, Navigation, Layers3 } from "lucide-react";
import "../styles/map25d.css";

function Map2_5D() {
  const [elevation, setElevation] = useState(42);
  const [vehicleX, setVehicleX] = useState(58);
  const [pedestrianY, setPedestrianY] = useState(45);

  useEffect(() => {
    const interval = setInterval(() => {
      setElevation(38 + Math.random() * 12);

      setVehicleX((prev) => {
        const next = prev + 0.8;
        return next > 82 ? 48 : next;
      });

      setPedestrianY((prev) => {
        const next = prev + 0.5;
        return next > 72 ? 35 : next;
      });
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="map25d-page">
      <div className="page-heading">
        <div>
          <span className="eyebrow">ENVIRONMENT MODEL</span>
          <h2>2.5D Semantic Map</h2>
          <p>
            Elevation, occupancy and semantic information represented in a
            lightweight spatial map.
          </p>
        </div>

        <div className="map-status">
          <span></span>
          MAP STREAM ACTIVE
        </div>
      </div>

      <div className="map25d-stats">
        <div>
          <Layers3 size={19} />
          <span>MAP DIMENSION</span>
          <strong>2.5D</strong>
        </div>

        <div>
          <Mountain size={19} />
          <span>ELEVATION</span>
          <strong>{elevation.toFixed(1)} cm</strong>
        </div>

        <div>
          <Map size={19} />
          <span>MAP RANGE</span>
          <strong>100 m</strong>
        </div>

        <div>
          <Car size={19} />
          <span>OBJECTS</span>
          <strong>6 ACTIVE</strong>
        </div>
      </div>

      <div className="map25d-layout">
        <div className="map25d-card">
          <div className="map-card-header">
            <span>LIVE SEMANTIC ENVIRONMENT</span>
            <small>SIMULATION</small>
          </div>

          <div className="map25d-view">
            <div className="terrain terrain-back"></div>
            <div className="terrain terrain-middle"></div>
            <div className="terrain terrain-front"></div>

            <div className="map-grid"></div>

            <div className="semantic-road"></div>

            <div
              className="map-object map-vehicle"
              style={{ left: `${vehicleX}%` }}
            >
              <Car size={25} />
              <span>VEHICLE</span>
            </div>

            <div
              className="map-object map-pedestrian"
              style={{ top: `${pedestrianY}%` }}
            >
              <Navigation size={19} />
              <span>PEDESTRIAN</span>
            </div>

            <div className="map-object map-wall">
              <div></div>
              <span>WALL</span>
            </div>

            <div className="ego-map">
              <Car size={32} />
              <span>EGO</span>
            </div>

            <div className="elevation-point point-1"></div>
            <div className="elevation-point point-2"></div>
            <div className="elevation-point point-3"></div>
            <div className="elevation-point point-4"></div>
            <div className="elevation-point point-5"></div>

            <div className="map-range range-a">10 m</div>
            <div className="map-range range-b">50 m</div>
            <div className="map-range range-c">100 m</div>
          </div>
        </div>

        <div className="map-info">
          <div className="map-info-card">
            <span className="eyebrow">SEMANTIC LAYERS</span>

            <div className="layer-item">
              <i className="layer-dot drivable"></i>
              <span>Drivable Terrain</span>
              <strong>ACTIVE</strong>
            </div>

            <div className="layer-item">
              <i className="layer-dot non-drivable"></i>
              <span>Non-Drivable</span>
              <strong>ACTIVE</strong>
            </div>

            <div className="layer-item">
              <i className="layer-dot vehicle"></i>
              <span>Dynamic Vehicles</span>
              <strong>3</strong>
            </div>

            <div className="layer-item">
              <i className="layer-dot pedestrian"></i>
              <span>Pedestrians</span>
              <strong>2</strong>
            </div>

            <div className="layer-item">
              <i className="layer-dot elevation"></i>
              <span>Elevation Data</span>
              <strong>LIVE</strong>
            </div>
          </div>

          <div className="map-info-card height-card">
            <span className="eyebrow">HEIGHT-AWARE CELL</span>

            <div className="height-value">
              <Mountain size={25} />
              <strong>{elevation.toFixed(1)} cm</strong>
            </div>

            <p>
              Each cell can retain elevation and semantic information instead
              of representing the environment only as a flat occupancy grid.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Map2_5D;