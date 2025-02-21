import { Bell, Shield, AlertTriangle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

type Alert = {
  type: "phishing" | "malicious" | "tracker"
  message: string
  timestamp: string
}

const alertIcons = {
  phishing: Bell,
  malicious: AlertTriangle,
  tracker: Shield,
}

const alertColors = {
  phishing: "text-yellow-500",
  malicious: "text-red-500",
  tracker: "text-green-500",
}

export function RecentAlerts({ alerts }: { alerts: Alert[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Alerts</CardTitle>
        <CardDescription>Stay informed about potential threats</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {alerts.map((alert, index) => {
            const Icon = alertIcons[alert.type]
            return (
              <div key={index} className="flex items-center space-x-4">
                <Icon className={`h-5 w-5 ${alertColors[alert.type]}`} />
                <div>
                  <p className="text-sm font-medium">{alert.message}</p>
                  <p className="text-xs text-muted-foreground">{alert.timestamp}</p>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}

