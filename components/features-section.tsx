import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Construction, Zap, Gamepad2, Bot, Database, Brain } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "WebSerial robot detection",
      status: "ready",
      description: "Automatically detect and connect to robots via WebSerial API",
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "One-click calibration",
      status: "ready",
      description: "Visual feedback system for quick and accurate robot calibration",
    },
    {
      icon: <Gamepad2 className="w-5 h-5" />,
      title: "Live teleoperation with sliders & keyboard",
      status: "ready",
      description: "Real-time robot control through intuitive web interface",
    },
    {
      icon: <Bot className="w-5 h-5" />,
      title: "MockBot for demos without hardware",
      status: "ready",
      description: "Test and demo your applications without physical robot hardware",
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "Data recording & replay",
      status: "coming-soon",
      description: "Record robot movements and replay them for training and analysis",
    },
    {
      icon: <Brain className="w-5 h-5" />,
      title: "AI training & inference",
      status: "coming-soon",
      description: "Train AI models on recorded data and deploy for autonomous control",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold">Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to bridge the gap between robot hardware and software
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="relative">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">{feature.icon}</div>
                    <div>
                      {feature.status === "ready" ? (
                        <Badge variant="default" className="text-xs">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Ready
                        </Badge>
                      ) : (
                        <Badge variant="secondary" className="text-xs">
                          <Construction className="w-3 h-3 mr-1" />
                          Coming Soon
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
