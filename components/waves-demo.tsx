"use client"

import { useTheme } from "next-themes"
import { Waves } from "@/components/ui/waves-background"

export function WavesDemo() {
  const { theme } = useTheme()
  
  return (
    <div className="relative w-full h-[calc(100vh-4rem)] bg-background/80 overflow-hidden">
      <div className="absolute inset-0">
        <Waves
          lineColor={theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.15)"}
          backgroundColor="transparent"
          waveSpeedX={0.015}
          waveSpeedY={0.01}
          waveAmpX={50}
          waveAmpY={25}
          friction={0.98}
          tension={0.005}
          maxCursorMove={150}
          xGap={30}
          yGap={30}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-8">
        <h1 className="text-6xl font-bold mb-6 text-primary">Welcome to My Portfolio</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Move your mouse across the screen to interact with the waves
        </p>
      </div>
    </div>
  )
} 