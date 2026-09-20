import { useEffect, useState } from "react";
import { Car, Navigation, Mountain } from "lucide-react";

import "../styles/semanticMap.css";

function SemanticMap() {
  const [vehicleX, setVehicleX] = useState(57);
  const [pedestrianY, setPedestrianY] = useState(48);
  const [elevation, setElevation] = useState(42);

  useEffect(() => {
    const interval = setInterval(() => {
      setVehicleX((prev) => {
        const next = prev + 0.6;
        return next > 66 ? 48 : next;
      });

      setPedestrianY((prev) => {
        const next = prev + 0.35;
        return next > 56 ? 42 : next;
      });

      setElevation(38 + Math.floor(Math.random() * 12));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="semantic-card">

      <div className="semantic-header">
        <div>
          <span>PERCEPTION OUTPUT</span>
          <h3>2.5D Semantic Map</h3>
        </div>

        <div className="elevation-label">
          <Mountain size={15} />
          ELEVATION + SEMANTICS
        </div>
      </div>

      <div className="semantic-map">

        <div className="terrain terrain-far" />
        <div className="terrain terrain-mid" />
        <div className="terrain terrain-near" />

        <div className="semantic-grid" />

        <div className="semantic-road" />

        {/* ELEVATION DATA */}

        <div className="elevation-points">
          {Array.from({ length: 35 }).map((_, index) => (
            <i
              key={index}
              style={{
                left: `${8 + ((index * 19) % 84)}%`,
                top: `${8 + ((index * 31) % 78)}%`,
                transform: `scale(${
                  0.7 + ((elevation + index) % 5) * 0.15
                })`,
              }}
            />
          ))}
        </div>

        {/* MOVING VEHICLE */}

        <div
          className="semantic-object semantic-vehicle"
          style={{ left: `${vehicleX}%` }}
        >
          <Car size={24} />
          <span>VEHICLE</span>
        </div>

        {/* MOVING PEDESTRIAN */}

        <div
          className="semantic-object semantic-pedestrian"
          style={{ top: `${pedestrianY}%` }}
        >
          <Navigation size={18} />
          <span>PEDESTRIAN</span>
        </div>

        {/* EGO */}

        <div className="semantic-ego">
          <Car size={28} />
          <span>EGO</span>
        </div>

        {/* HEIGHT */}

        <div className="height-readout">
          ELEVATION
          <strong>{elevation}.4 m</strong>
        </div>

      </div>

      <div className="semantic-legend">

        <div>
          <i className="legend-road" />
          Drivable
        </div>

        <div>
          <i className="legend-obstacle" />
          Non-drivable
        </div>

        <div>
          <i className="legend-vehicle" />
          Vehicle
        </div>

        <div>
          <i className="legend-pedestrian" />
          Pedestrian
        </div>

        <div>
          <i className="legend-elevation" />
          Elevation
        </div>

      </div>

    </div>
  );
}

export default SemanticMap;