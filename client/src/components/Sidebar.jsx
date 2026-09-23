import { Link, NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 min-h-[calc(100vh-4rem)] border-r border-border p-4">
      <nav className="space-y-2">
        <p className="text-muted-foreground px-3 py-2">Navigation</p>

        <NavLink
          to="/"
          className={({ isActive }) =>
            `block px-3 py-2 rounded-lg ${
              isActive ? "bg-accent text-accent-foreground" : "hover:bg-accent"
            }`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/shipments"
          className={({ isActive }) =>
            `block px-3 py-2 rounded-lg ${
              isActive ? "bg-accent text-accent-foreground" : "hover:bg-accent"
            }`
          }
        >
          Shipments
        </NavLink>

        <NavLink
          to="/route-planner"
          className={({ isActive }) =>
            `block px-3 py-2 rounded-lg ${
              isActive ? "bg-accent text-accent-foreground" : "hover:bg-accent"
            }`
          }
        >
          Route Planner
        </NavLink>

        <NavLink
          to="/alerts"
          className={({ isActive }) =>
            `block px-3 py-2 rounded-lg ${
              isActive ? "bg-accent text-accent-foreground" : "hover:bg-accent"
            }`
          }
        >
          Alerts
        </NavLink>

        <NavLink
          to="/simulation"
          className={({ isActive }) =>
            `block px-3 py-2 rounded-lg ${
              isActive ? "bg-accent text-accent-foreground" : "hover:bg-accent"
            }`
          }
        >
          Simulation
        </NavLink>

        <NavLink
          to="/history"
          className={({ isActive }) =>
            `block px-3 py-2 rounded-lg ${
              isActive ? "bg-accent text-accent-foreground" : "hover:bg-accent"
            }`
          }
        >
          History
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
