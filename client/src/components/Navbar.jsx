import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

function Navbar({ sidebarOpen, setSidebarOpen }) {
  return (
    <header className="h-16 border-b border-border flex items-center justify-between px-6">
      <div className="flex items-center gap-3">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          ☰
        </Button>

        <h1 className="text-xl font-bold">GeoSafe</h1>
      </div>

      <ThemeToggle />
    </header>
  );
}

export default Navbar;
