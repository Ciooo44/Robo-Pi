import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { ArrowRight, Zap, Code2 } from "lucide-react"
import { DeviceRegistryDashboard } from "./device-registry-dashboard"

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="font-mono text-xs">
                <Zap className="w-3 h-3 mr-1" />
                PLUG-AND-PLAY ROBOTICS
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                <span className="text-primary font-mono">Robo-Pi</span>
                <br />
                <span className="text-muted-foreground">Zapier for Robots</span>
                <span className="ml-2">🤖⚡</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Close the gap between robot hardware and software with a plug-and-play SDK + web dashboard.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="font-mono" asChild>
                <a href="https://github.com/Ciooo44/Robo-Pi" target="_blank" rel="noopener noreferrer">
                  <Code2 className="w-4 h-4 mr-2" />
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <div className="sm:hidden">
                <DeviceRegistryDashboard />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary font-mono">1</div>
                <div className="text-sm text-muted-foreground font-mono">Detect</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary font-mono">2</div>
                <div className="text-sm text-muted-foreground font-mono">Calibrate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary font-mono">3</div>
                <div className="text-sm text-muted-foreground font-mono">Control</div>
              </div>
            </div>
          </div>

          <div className="relative space-y-6">
            <div className="relative z-10 bg-card/50 backdrop-blur-sm border rounded-lg p-8">
              <Image
                src="/images/robot-dog-logo.png"
                alt="Robo-Pi Robot"
                width={400}
                height={400}
                className="w-full h-auto"
              />
            </div>

            <div className="hidden sm:block">
              <DeviceRegistryDashboard />
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
