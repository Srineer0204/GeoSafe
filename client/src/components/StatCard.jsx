import {
    Card,
    CardHeader,
    CardTitle,
    CardContent
} from "@/components/ui/card";

export default function StatCard({title,value}) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>
                <p className="text-2xl font-bold">{value}</p>
            </CardContent>
        </Card>
    )
}