import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import RoutePlanner from "./pages/RoutePlanner";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Shipments from "./pages/Shipments";
import Alerts from "./pages/Alerts";
import Simulation from "./pages/Simulation";
import History from "./pages/History";
import { useState } from "react";
import { Toaster } from "@/components/ui/sonner";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="flex">
          <Sidebar sidebarOpen={sidebarOpen} />
          <main className="flex-1 p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/route-planner" element={<RoutePlanner />} />
              <Route path="/shipments" element={<Shipments />} />
              <Route path="/alerts" element={<Alerts />} />
              <Route path="/simulation" element={<Simulation />} />
              <Route path="/history" element={<History />} />
            </Routes>
          </main>
        </div>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
