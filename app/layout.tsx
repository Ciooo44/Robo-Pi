import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { GridBackground } from "@/components/grid-background"

export const metadata: Metadata = {
  title: "Robo-Pi",
  description: "Close the gap between robot hardware and software with a plug-and-play SDK + web dashboard CA: C3FgBZDPWk8WfLjP6LTBMH8FGkTg5MawyuyaHJyUpBLV ",
  generator: "v0.dev",
  icons: {
    icon: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=JetBrains+Mono:wght@100;200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <GridBackground>{children}</GridBackground>
        </ThemeProvider>
      </body>
    </html>
  )
}
