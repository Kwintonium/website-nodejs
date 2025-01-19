"use client";
import React, { useEffect, useState } from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { useTheme } from "next-themes";

export function SparklesPreview() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === 'system' ? systemTheme : theme;
  
  return (
    <div className="relative w-full h-[calc(100vh-4rem)] bg-background flex flex-col items-center justify-center">
      <div className="absolute inset-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.8}
          maxSize={1.2}
          particleDensity={100}
          className="w-full h-full"
          particleColor={currentTheme === "dark" ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.7)"}
          speed={0.5}
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-center mb-6">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl text-center">
          Explore my work and experience
        </p>
      </div>
    </div>
  );
} 