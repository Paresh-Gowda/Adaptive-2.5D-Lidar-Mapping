import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import StatusBar from "./components/StatusBar";

import Dashboard from "./pages/Dashboard";
import Perception from "./pages/Perception";
import AdaptiveGridPage from "./pages/AdaptiveGridPage";
import Map2_5D from "./pages/Map2_5D";
import Analytics from "./pages/Analytics";
import References from "./pages/References";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />;
  }

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />

        <div className="app-body">
          <Sidebar />

          <main className="main-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/perception" element={<Perception />} />
              <Route
                path="/adaptive-grid"
                element={<AdaptiveGridPage />}
              />
              <Route path="/map" element={<Map2_5D />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/references" element={<References />} />
            </Routes>
          </main>
        </div>

        <StatusBar />
      </div>
    </BrowserRouter>
  );
}

export default App;