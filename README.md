# AgniVeda | Adaptive 2.5D LiDAR Mapping

## 🔗 Live Demo
[View Project](https://agniveda-lidar.netlify.app/)

AgniVeda is a frontend prototype developed for **Smart India Hackathon 2026 – Problem Statement 26053**, titled **“Adaptive Variable Resolution 2.5D LiDAR Mapping for Dynamic Environment Perception”**, under the **DRDO – Smart Vehicles** theme.

## Problem Statement

Autonomous vehicles generate large 3D LiDAR point clouds containing millions of points. Processing all points at the same high resolution requires significant computational power and memory. At the same time, conventional 2D maps can lose important height information such as curbs, obstacles and elevation changes.

The objective of this project is to develop an **adaptive variable-resolution 2.5D LiDAR mapping system** that preserves important spatial and height information while reducing unnecessary computation in distant regions.

## Proposed Solution

AgniVeda proposes a LiDAR-based perception pipeline that processes the environment at different spatial resolutions depending on the distance from the vehicle. The region close to the vehicle receives higher detail, while distant regions use progressively larger cells.

Our proposed resolution schedule is:

- **0–10 m:** 5 cm
- **10–25 m:** 10 cm
- **25–50 m:** 25 cm
- **50–100 m:** 50 cm

The system is designed to represent elevation, occupancy and semantic information in a variable-resolution 2.5D map. The perception pipeline can identify drivable and non-drivable regions and classify objects such as vehicles, pedestrians, walls and poles.

## Technical Approach

The proposed pipeline consists of LiDAR input, preprocessing, deep-learning-based perception, adaptive grid generation and 2.5D semantic mapping. The adaptive grid engine is the key component responsible for converting the point cloud into non-uniform cells while maintaining spatial consistency and minimizing unnecessary data processing.

The current web prototype demonstrates this concept using simulated LiDAR visualization and interface components. The frontend is designed so that simulated input can later be replaced with recorded LiDAR datasets or a live perception pipeline.

## Prototype Features

- Real-time LiDAR environment visualization
- Simulated autonomous vehicle movement
- LiDAR scan visualization
- Dynamic object visualization
- Adaptive resolution visualization
- 2.5D semantic map interface
- Perception dashboard
- Analytics and performance dashboard
- Technical research and reference section
- Futuristic SIH-oriented interface

> **Note:** The current frontend is a prototype/demo interface. Displayed sensor values and simulation behaviour are illustrative and should not be interpreted as measured real-world performance.

## Technology Stack

- **Frontend:** React + Vite
- **Language:** JavaScript / JSX
- **Routing:** React Router
- **UI Icons:** Lucide React
- **Styling:** CSS
- **Future AI Processing:** PyTorch, PointNet++ / Sparse CNN
- **Future LiDAR Processing:** Open3D, NumPy
- **Future Robotics Integration:** ROS 2
- **Future Optimization:** TensorRT
- **Deployment:** Netlify

## Project Structure

```text
adaptive-2.5d-lidar-mapping/
│
├── public/
│   ├── logo.svg
│   ├── favicon.svg
│   └── assets/
│
├── src/
│   │
│   ├── assets/
│   │   └── agni-car.png
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   ├── StatusBar.jsx
│   │   ├── LoadingScreen.jsx
│   │   └── SemanticMap.jsx
│   │
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Perception.jsx
│   │   ├── AdaptiveGridPage.jsx
│   │   ├── Map2_5D.jsx
│   │   ├── Analytics.jsx
│   │   └── References.jsx
│   │
│   ├── styles/
│   │   ├── navbar.css
│   │   ├── sidebar.css
│   │   ├── components.css
│   │   ├── dashboard.css
│   │   ├── semanticMap.css
│   │   ├── perception.css
│   │   ├── adaptiveGrid.css
│   │   ├── map25d.css
│   │   ├── analytics.css
│   │   ├── references.css
│   │   └── loadingScreen.css
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```