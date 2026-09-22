import {
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from "@/components/ui/card";

export default function Dashboard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>GeoSafe Dashboard</CardTitle>
      </CardHeader>
      <CardContent>
        Your maritime route safety dashboard
      </CardContent>
    </Card>
  )
}