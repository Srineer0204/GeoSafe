import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import RoutePlanner from "./pages/RoutePlanner";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

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
          </Routes>
        </main>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;