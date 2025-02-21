"use client"

import { useState, useEffect } from "react"
import { Bell, Shield } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function Popup() {
  const [stats, setStats] = useState({
    maliciousBlocked: 0,
    trackersBlocked: 0,
    phishingAlerts: 0,
  })

  const [settings, setSettings] = useState({
    urlBlocking: true,
    trackerBlocking: true,
    phishingAlerts: true,
  })

  useEffect(() => {
    // In a real extension, we would fetch these stats from storage
    setStats({
      maliciousBlocked: 15,
      trackersBlocked: 237,
      phishingAlerts: 3,
    })
  }, [])

  const handleSettingChange = (setting: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [setting]: !prev[setting] }))
    // In a real extension, we would save this to storage and update the background script
  }

  return (
    <div className="w-[350px] p-4">
      <Tabs defaultValue="stats">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="stats">Stats</TabsTrigger>
          <TabsTrigger value="alerts">Alerts</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="stats">
          <Card>
            <CardHeader>
              <CardTitle>Protection Statistics</CardTitle>
              <CardDescription>Your browsing is secure</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Malicious URLs Blocked</span>
                <span className="font-bold">{stats.maliciousBlocked}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Trackers Blocked</span>
                <span className="font-bold">{stats.trackersBlocked}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Phishing Alerts</span>
                <span className="font-bold">{stats.phishingAlerts}</span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="alerts">
          <Card>
            <CardHeader>
              <CardTitle>Recent Alerts</CardTitle>
              <CardDescription>Stay informed about potential threats</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Bell className="h-5 w-5 text-yellow-500" />
                  <div>
                    <p className="text-sm font-medium">Phishing attempt blocked</p>
                    <p className="text-xs text-muted-foreground">2 minutes ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Shield className="h-5 w-5 text-green-500" />
                  <div>
                    <p className="text-sm font-medium">15 trackers blocked</p>
                    <p className="text-xs text-muted-foreground">5 minutes ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Extension Settings</CardTitle>
              <CardDescription>Customize your protection</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between space-x-2">
                <Label htmlFor="url-blocking" className="flex flex-col space-y-1">
                  <span>Malicious URL Blocking</span>
                  <span className="font-normal text-xs text-muted-foreground">
                    Prevent access to dangerous websites
                  </span>
                </Label>
                <Switch
                  id="url-blocking"
                  checked={settings.urlBlocking}
                  onCheckedChange={() => handleSettingChange("urlBlocking")}
                />
              </div>
              <div className="flex items-center justify-between space-x-2">
                <Label htmlFor="tracker-blocking" className="flex flex-col space-y-1">
                  <span>Tracker Blocking</span>
                  <span className="font-normal text-xs text-muted-foreground">Block ads and tracking scripts</span>
                </Label>
                <Switch
                  id="tracker-blocking"
                  checked={settings.trackerBlocking}
                  onCheckedChange={() => handleSettingChange("trackerBlocking")}
                />
              </div>
              <div className="flex items-center justify-between space-x-2">
                <Label htmlFor="phishing-alerts" className="flex flex-col space-y-1">
                  <span>Phishing Alerts</span>
                  <span className="font-normal text-xs text-muted-foreground">Warn about potential phishing sites</span>
                </Label>
                <Switch
                  id="phishing-alerts"
                  checked={settings.phishingAlerts}
                  onCheckedChange={() => handleSettingChange("phishingAlerts")}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

