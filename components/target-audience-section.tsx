import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, GraduationCap, Building2, FlaskConical } from "lucide-react"

export function TargetAudienceSection() {
  const audiences = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Makers & Hobbyists",
      description: "Perfect for DIY robotics projects and personal experimentation",
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Robotics Clubs",
      description: "Ideal for schools and universities teaching robotics",
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Small Robotics Startups",
      description: "Accelerate development with plug-and-play integration",
    },
    {
      icon: <FlaskConical className="w-6 h-6" />,
      title: "Research Labs",
      description: "Focus on research, not integration complexity",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold">Who is it for?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Robo-Pi is designed for anyone working at the intersection of hardware and software
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto p-3 bg-primary/10 rounded-lg text-primary w-fit">{audience.icon}</div>
                <CardTitle className="text-lg">{audience.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{audience.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
