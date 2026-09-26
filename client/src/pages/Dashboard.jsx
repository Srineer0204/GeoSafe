import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import StatCard from "@/components/StatCard";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>GeoSafe Dashboard</CardTitle>
        </CardHeader>
        <CardContent>Your maritime route safety dashboard</CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <StatCard title="Total Shipments" value="-" />
        <StatCard title="Active Routes" value="-" />
        <StatCard title="Risk Alerts" value="-" />
      </div>
    </div>
  );
}
