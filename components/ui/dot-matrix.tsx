"use client"

import { useEffect, useRef } from "react"

interface Dot {
  x: number
  y: number
  baseX: number
  baseY: number
  size: number
  vx: number // velocity X
  vy: number // velocity Y
}

export function DotMatrix() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const dotsRef = useRef<Dot[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const timeRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext("2d")
    if (!context) return

    const updateCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      context.scale(dpr, dpr)
      return rect
    }

    const rect = updateCanvasSize()
    const spacing = 40
    const mouseMoveRadius = 120
    const maxDisplacement = 30
    const connectionRadius = 80
    const baseMovementRadius = 5 // Base movement range
    const baseMovementSpeed = 0.002 // Speed of automatic movement

    function initDots() {
      dotsRef.current = []
      for (let x = spacing; x < rect.width; x += spacing) {
        for (let y = spacing; y < rect.height; y += spacing) {
          dotsRef.current.push({
            x: x,
            y: y,
            baseX: x,
            baseY: y,
            size: 2,
            vx: Math.random() * 2 - 1,
            vy: Math.random() * 2 - 1,
          })
        }
      }
    }

    function draw(timestamp: number) {
      if (!context || !canvas) return

      timeRef.current = timestamp * baseMovementSpeed

      context.clearRect(0, 0, rect.width, rect.height)
      
      // Draw connecting lines
      context.beginPath()
      context.strokeStyle = "rgba(100, 100, 100, 0.15)"
      context.lineWidth = 0.5

      dotsRef.current.forEach((dot, i) => {
        dotsRef.current.slice(i + 1).forEach(otherDot => {
          const dx = dot.x - otherDot.x
          const dy = dot.y - otherDot.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionRadius) {
            context.moveTo(dot.x, dot.y)
            context.lineTo(otherDot.x, otherDot.y)
          }
        })
      })
      context.stroke()

      // Update and draw dots
      dotsRef.current.forEach((dot) => {
        // Base movement
        const baseX = dot.baseX + Math.sin(timeRef.current + dot.baseX * 0.05) * baseMovementRadius
        const baseY = dot.baseY + Math.cos(timeRef.current + dot.baseY * 0.05) * baseMovementRadius

        // Mouse interaction
        const dx = mouseRef.current.x - dot.x
        const dy = mouseRef.current.y - dot.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const isNearMouse = distance < mouseMoveRadius

        if (isNearMouse) {
          const angle = Math.atan2(dy, dx)
          const force = (1 - distance / mouseMoveRadius)
          const displacement = force * maxDisplacement
          
          dot.x = baseX - Math.cos(angle + force) * displacement
          dot.y = baseY - Math.sin(angle + force) * displacement
          
          // Draw dots with light blue color when near mouse
          context.fillStyle = `rgba(100, 210, 255, ${0.4 + force * 0.6})`
        } else {
          dot.x = baseX
          dot.y = baseY
          context.fillStyle = "rgba(100, 100, 100, 0.5)"
        }

        context.beginPath()
        context.arc(dot.x, dot.y, dot.size * (isNearMouse ? 1.5 : 1), 0, Math.PI * 2)
        context.fill()
      })

      requestAnimationFrame(draw)
    }

    function handleMouseMove(e: MouseEvent) {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }

    function handleResize() {
      updateCanvasSize()
      initDots()
    }

    initDots()
    requestAnimationFrame(draw)

    canvas.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", handleResize)

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ touchAction: "none" }}
    />
  )
} 