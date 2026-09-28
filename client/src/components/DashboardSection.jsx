import {
    Card,
    CardTitle,
    CardHeader,
    CardContent,
    CardDescription
} from "@/components/ui/card";

export default function DashboardSection({title,message}) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>
                <p className="text-foreground/75">{message}</p>
            </CardContent>
        </Card>
    )
}