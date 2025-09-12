import { Github, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col items-center gap-4 text-sm text-muted-foreground">
          <p className="text-center">
            Based on the original Robo-pi (python-raspberry) and adapted for web robotic AI. Reference:{" "}
            <a
              href="https://github.com/sunfounder"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-colors underline"
            >
              SunFounder
            </a>
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span>
              Created with ❤️ by{" "}
              <a
                href="https://github.com/Ciooo44"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent transition-colors underline"
              >
                0xmizuno
              </a>{" "}
              under{" "}
              <a
                href="https://github.com/Ciooo44/Robo-Pi/blob/main/LICENSE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent transition-colors underline"
              >
                MIT License
              </a>
            </span>
            <div className="flex items-center gap-4">
              <a
                href="https://x.com/Robobot_Pi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-foreground transition-colors"
              >
                <Twitter className="h-4 w-4" />X
              </a>
              <a
                href="https://github.com/Ciooo44/Robo-Pi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-foreground transition-colors"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>
          <p className="text-xs">Copyright (c) 2025 0xMizuno</p>
        </div>
      </div>
    </footer>
  )
}
