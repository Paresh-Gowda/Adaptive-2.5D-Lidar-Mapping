import { useEffect, useState } from "react";
import "../styles/loadingScreen.css";
import agniCar from "../assets/agni-car.png";

function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 5000;
    const intervalTime = 50;
    const totalSteps = duration / intervalTime;

    let step = 0;

    const interval = setInterval(() => {
      step++;

      const nextProgress = Math.min(100, Math.round((step / totalSteps) * 100));

      setProgress(nextProgress);

      if (nextProgress >= 100) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 300);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [onComplete]);

  const getStatus = () => {
    if (progress < 25) return "INITIALIZING LiDAR";
    if (progress < 50) return "LOADING POINT CLOUD";
    if (progress < 75) return "BUILDING ADAPTIVE GRID";
    if (progress < 95) return "INITIALIZING 2.5D MAP";
    return "PERCEPTION ONLINE";
  };

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-brand">
          <div className="loading-logo">
            <span>◉</span>
          </div>

          <h1>AgniVeda</h1>

          <p>ADAPTIVE 2.5D LiDAR MAPPING</p>
        </div>

        <div className="loading-vehicle">
          <div className="lidar-ring ring-one"></div>
          <div className="lidar-ring ring-two"></div>
          <div className="lidar-beam"></div>

          <img src={agniCar} alt="AgniVeda LiDAR vehicle" />
        </div>

        <div className="loading-status">
          <span className="status-dot"></span>
          {getStatus()}
        </div>

        <div className="loading-progress">
          <div
            className="loading-progress-bar"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="loading-footer">
          <span>SIH26053</span>
          <strong>{progress}%</strong>
          <span>DRDO · SMART VEHICLES</span>
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
