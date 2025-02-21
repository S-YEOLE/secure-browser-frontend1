import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

type Stats = {
  maliciousBlocked: number
  trackersBlocked: number
  phishingAlerts: number
  totalScanned: number
}

export function DetailedStats({ stats }: { stats: Stats }) {
  const totalThreats = stats.maliciousBlocked + stats.trackersBlocked + stats.phishingAlerts
  const threatPercentage = (totalThreats / stats.totalScanned) * 100

  return (
    <Card>
      <CardHeader>
        <CardTitle>Detailed Statistics</CardTitle>
        <CardDescription>Your browsing protection summary</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium">Overall Protection</span>
            <span className="text-sm font-medium">{threatPercentage.toFixed(1)}%</span>
          </div>
          <Progress value={threatPercentage} className="h-2" />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Malicious URLs Blocked</span>
            <span className="font-bold">{stats.maliciousBlocked}</span>
          </div>
          <div className="flex justify-between">
            <span>Trackers Blocked</span>
            <span className="font-bold">{stats.trackersBlocked}</span>
          </div>
          <div className="flex justify-between">
            <span>Phishing Alerts</span>
            <span className="font-bold">{stats.phishingAlerts}</span>
          </div>
          <div className="flex justify-between">
            <span>Total URLs Scanned</span>
            <span className="font-bold">{stats.totalScanned}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

