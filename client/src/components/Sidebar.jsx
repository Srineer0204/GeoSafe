import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 min-h-[calc(100vh-4rem)] border-r border-slate-800 p-4">
      <nav className="space-y-2">
        <p className="text-slate-400 px-3 py-2 cursor-pointer">Navigation</p>

        <a href="#" className="block px-3 py-2 rounded-lg bg-slate-800">
          Dashboard
        </a>

        <a href="#" className="block px-3 py-2 rounded-lg hover:bg-slate-800">
          Shipments
        </a>

        <a href="#" className="block px-3 py-2 rounded-lg hover:bg-slate-800">
          Routes
        </a>

        <a href="#" className="block px-3 py-2 rounded-lg hover:bg-slate-800">
          Alerts
        </a>

        <a href="#" className="block px-3 py-2 rounded-lg hover:bg-slate-800">
          Simulation
        </a>

        <a href="#" className="block px-3 py-2 rounded-lg hover:bg-slate-800">
          History
        </a>
      </nav>
    </aside>
  );
}

export default Sidebar;
