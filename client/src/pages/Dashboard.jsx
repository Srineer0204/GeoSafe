import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import StatCard from "@/components/StatCard";
import DashboardSection from "@/components/DashboardSection";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard Overview</h1>

        <p className="mt-2 text-foreground/75">
          Monitor your maritime shipments and route safety.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <StatCard title="Total Shipments" value="-" />
        <StatCard title="Active Routes" value="-" />
        <StatCard title="Risk Alerts" value="-" />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <DashboardSection 
        title="Recent Shipments"
        message="No shipments yet"
        />
        <DashboardSection 
        title="Recent Alerts"
        message="No alerts yet"
        />
      </div>
    </div>
  );
}
