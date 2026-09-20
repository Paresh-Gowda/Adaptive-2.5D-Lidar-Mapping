import Navbar from "./components/Navbar";
import StatusBar from "./components/StatusBar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="app">
      <Navbar />

      <div className="app-body">
        <Sidebar />

        <main className="main-content">
          <Dashboard />
        </main>
      </div>

      <StatusBar />
    </div>
  );
}

export default App;