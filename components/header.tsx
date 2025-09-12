import { ThemeToggle } from "./theme-toggle"
import Image from "next/image"

export function Header() {
  return (
    <header className="w-full border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <Image src="/images/robot-dog-logo.png" alt="Robo-Pi Logo" width={32} height={32} className="w-8 h-8" />
            <h1 className="text-2xl font-bold">Robo-Pi</h1>
          </div>
          <div className="flex items-center gap-2 text-primary font-mono text-sm">
            <span className="text-xs text-muted-foreground font-mono">
              Zapier for Robots — plug-and-play SDK + web dashboard
            </span>
          </div>
        </div>
        <ThemeToggle />
      </div>
    </header>
  )
}
