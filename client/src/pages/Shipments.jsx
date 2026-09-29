import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Shipments() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [cargoType, setCargoType] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!origin.trim() || !destination.trim() || !cargoType) {
      alert("Please fill in all shipment details.");
      return;
    }

    console.log({
      origin,
      destination,
      cargoType,
    });

    alert("Shipments details captured successfully");
  }
  return (
    <div className="space-y-6">
      <div className="text-3xl font-bold">
        <Card>
          <CardHeader>
            <CardTitle>Shipment Details</CardTitle>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="origin">Origin Port</Label>
                  <Input
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    id="origin"
                    placeholder="e.g., Mumbai"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="destination">Destination Port</Label>
                  <Input
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    id="destination"
                    placeholder="e.g., Singapore"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cargo">Cargo Type</Label>
                  <Select value={cargoType} onValueChange={setCargoType}>
                    <SelectTrigger id="cargo" className="w-full">
                      <SelectValue placeholder="Select cargo type" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="container">Container</SelectItem>
                      <SelectItem value="bulk">Bulk Cargo</SelectItem>
                      <SelectItem value="liquid">Liquid Cargo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button type="submit">Plan Route</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
