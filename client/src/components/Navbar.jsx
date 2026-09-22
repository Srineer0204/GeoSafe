import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <header className="h-16 border-b border-border flex items-center justify-between px-6">
      <h1 className="text-xl font-bold">GeoSafe</h1>

      <ThemeToggle />
    </header>
  );
}

export default Navbar;