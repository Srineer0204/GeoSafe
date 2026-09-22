import { Link,NavLink } from "react-router-dom";

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

        <a href="#" className="block px-3 py-2 rounded-lg hover:bg-accent">
          Shipments
        </a>

        <NavLink 
        to="/route-planner"
        className={({isActive}) => 
        `block px-3 py-2 rounded-lg ${
          isActive
          ? "bg-accent text-accent-foreground"
          : "hover:bg-accent"
        }`
      }
      >
        Route Planner
      </NavLink>
        <a href="#" className="block px-3 py-2 rounded-lg hover:bg-accent">
          Alerts
        </a>

        <a href="#" className="block px-3 py-2 rounded-lg hover:bg-accent">
          Simulation
        </a>

        <a href="#" className="block px-3 py-2 rounded-lg hover:bg-accent">
          History
        </a>
      </nav>
    </aside>
  );
}

export default Sidebar;
