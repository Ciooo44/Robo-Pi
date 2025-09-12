"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Monitor, AlertCircle, Wifi, WifiOff } from "lucide-react"

export function DeviceRegistryDashboard() {
  const [isConnecting, setIsConnecting] = useState(false)
  const [showError, setShowError] = useState(false)

  const handleAddDevice = () => {
    setIsConnecting(true)
    setShowError(false)

    // Simulate connection attempt
    setTimeout(() => {
      setIsConnecting(false)
      setShowError(true)
    }, 2000)
  }

  return (
    <Card className="w-full max-w-2xl bg-card/50 backdrop-blur-sm border">
      <CardHeader className="pb-6">
        <CardTitle className="text-2xl font-mono flex items-center gap-3">
          <Monitor className="w-7 h-7" />
          DASHBOARD
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 p-8">
        <div>
          <h3 className="text-lg font-mono text-muted-foreground mb-4">Device Registry</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 bg-muted/50 rounded border">
              <span className="text-lg font-mono">SO-100</span>
              <Badge variant="secondary" className="text-sm px-3 py-1">
                <Wifi className="w-4 h-4 mr-2" />
                Supported
              </Badge>
            </div>
          </div>
        </div>

        <div className="border-t pt-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg font-mono text-muted-foreground">Connected Units</span>
            <Button
              size="lg"
              variant="outline"
              onClick={handleAddDevice}
              disabled={isConnecting}
              className="text-sm font-mono bg-transparent px-6 py-2"
            >
              <Plus className="w-4 h-4 mr-2" />
              {isConnecting ? "Connecting..." : "Add Unit"}
            </Button>
          </div>

          <div className="text-center py-12 text-muted-foreground">
            <WifiOff className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p className="text-lg font-mono">No units detected</p>
          </div>
        </div>

        {showError && (
          /* Increased error message padding and text size */
          <div className="flex items-center gap-3 p-4 bg-destructive/10 border border-destructive/20 rounded text-base">
            <AlertCircle className="w-5 h-5 text-destructive" />
            <span className="font-mono text-destructive">Device cannot find</span>
          </div>
        )}

        <div className="pt-4 border-t">
          <p className="text-sm text-muted-foreground font-mono text-center">Connect your own device to get started</p>
        </div>
      </CardContent>
    </Card>
  )
}
