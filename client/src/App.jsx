import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import RoutePlanner from "./pages/RoutePlanner";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-6">
          <h2 className="text-2xl font-semibold">Dashboard</h2>

          <p className="mt-2 text-slate-400">
            Maritime route risk intelligence
          </p>
        </main>
      </div>
    </div>
  );
}

export default App;
