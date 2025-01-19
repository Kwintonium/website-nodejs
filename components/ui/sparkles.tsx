"use client";
import React, { useId } from "react";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";

type ParticlesProps = {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
};

export const SparklesCore = (props: ParticlesProps) => {
  const {
    id,
    className,
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity,
  } = props;
  
  const [init, setInit] = useState(false);
  
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const controls = useAnimation();

  const particlesLoaded = async (container?: Container) => {
    if (container) {
      controls.start({
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    }
  };

  const generatedId = useId();

  return (
    <motion.div animate={controls} className={cn("opacity-0", className)}>
      {init && (
        <Particles
          id={id || generatedId}
          className={cn("h-full w-full")}
          particlesLoaded={particlesLoaded}
          options={{
            fullScreen: { enable: false },
            background: {
              color: {
                value: background || "transparent",
              },
            },
            particles: {
              number: {
                value: particleDensity || 100,
                density: {
                  enable: true,
                  value_area: 1000,
                },
              },
              color: {
                value: particleColor || "#ffffff",
              },
              shape: {
                type: "circle",
              },
              opacity: {
                value: 0.7,
              },
              size: {
                value: { min: minSize || 1, max: maxSize || 2 },
              },
              move: {
                enable: true,
                speed: speed || 0.5,
                direction: "none",
                random: true,
                straight: false,
                outModes: {
                  default: "bounce",
                  top: "bounce",
                  bottom: "bounce",
                  left: "bounce",
                  right: "bounce"
                },
                bounce: true,
                collisions: true
              },
            },
            detectRetina: true,
            responsive: [
              {
                maxWidth: 10000,
                options: {
                  particles: {
                    move: {
                      speed: speed || 0.5
                    }
                  }
                }
              }
            ]
          }}
        />
      )}
    </motion.div>
  );
}; 