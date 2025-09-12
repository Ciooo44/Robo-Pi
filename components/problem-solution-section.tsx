import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, CheckCircle, Zap, Code, Wrench, Brain } from "lucide-react"

export function ProblemSolutionSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Problem */}
          <div className="space-y-6">
            <div className="space-y-4">
              <Badge variant="destructive" className="font-mono">
                <AlertTriangle className="w-3 h-3 mr-1" />
                PROBLEM
              </Badge>
              <h2 className="text-3xl font-bold">Robotics is hard.</h2>
            </div>

            <div className="space-y-4">
              <Card className="border-destructive/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Wrench className="w-5 h-5 text-muted-foreground mt-1" />
                    <div>
                      <p className="font-medium">Makers and students can build robots.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-destructive/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Code className="w-5 h-5 text-muted-foreground mt-1" />
                    <div>
                      <p className="font-medium">Developers can code simulations and AI.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-destructive/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-destructive mt-1" />
                    <div>
                      <p className="font-medium text-destructive">But connecting the two is painful and slow.</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Every robot comes with its own SDK. Integration takes weeks. Robots end up siloed, fragile, and
                        hard to scale.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Solution */}
          <div className="space-y-6">
            <div className="space-y-4">
              <Badge className="font-mono">
                <CheckCircle className="w-3 h-3 mr-1" />
                SOLUTION
              </Badge>
              <h2 className="text-3xl font-bold">Robo-Pi makes robots plug-and-play.</h2>
            </div>

            <div className="space-y-4">
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">
                        Detect your robot with <code className="bg-muted px-1 rounded">findPort()</code>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Calibrate in seconds with visual feedback</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Code className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Teleoperate live from the browser</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Brain className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Record → Train → Eval for AI-driven control</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                <p className="font-medium text-primary">One unified API. One dashboard. Runs in your browser.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
