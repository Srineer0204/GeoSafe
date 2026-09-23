import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import RoutePlanner from "./pages/RoutePlanner";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Shipments from "./pages/Shipments";
import Alerts from "./pages/Alerts";
import Simulation from "./pages/Simulation";
import History from "./pages/History";

function App() {
  return (
    <BrowserRouter>
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element = {<Dashboard />} />
            <Route path="/route-planner" element={<RoutePlanner />} />
            <Route path="/Shipments" element={<Shipments />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/simulation" element={<Simulation />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </main>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;