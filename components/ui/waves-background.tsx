"use client"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface WavesProps {
  lineColor?: string
  backgroundColor?: string
  waveSpeedX?: number
  waveSpeedY?: number
  waveAmpX?: number
  waveAmpY?: number
  xGap?: number
  yGap?: number
  friction?: number
  tension?: number
  maxCursorMove?: number
  className?: string
}

class Grad {
  x: number
  y: number
  z: number

  constructor(x: number, y: number, z: number) {
    this.x = x
    this.y = y
    this.z = z
  }

  dot2(x: number, y: number) {
    return this.x * x + this.y * y
  }
}

class Noise {
  grad3: Grad[]
  p: number[]
  perm: number[]
  gradP: Grad[]

  constructor(seed = 0) {
    this.grad3 = [
      new Grad(1, 1, 0),
      new Grad(-1, 1, 0),
      new Grad(1, -1, 0),
      new Grad(-1, -1, 0),
      new Grad(1, 0, 1),
      new Grad(-1, 0, 1),
      new Grad(1, 0, -1),
      new Grad(-1, 0, -1),
      new Grad(0, 1, 1),
      new Grad(0, -1, 1),
      new Grad(0, 1, -1),
      new Grad(0, -1, -1),
    ]
    this.p = [
      151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225,
      140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247,
      120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177,
      33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165,
      71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211,
      133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25,
      63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196,
      135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217,
      226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206,
      59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248,
      152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22,
      39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218,
      246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241,
      81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157,
      184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93,
      222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180,
    ]
    this.perm = new Array(512)
    this.gradP = new Array(512)
    this.seed(seed)
  }

  seed(seed: number) {
    if (seed > 0 && seed < 1) {
      seed *= 65536
    }
    seed = Math.floor(seed)
    if (seed < 256) {
      seed |= seed << 8
    }
    for (let i = 0; i < 256; i++) {
      let v
      if (i & 1) {
        v = this.p[i] ^ (seed & 255)
      } else {
        v = this.p[i] ^ ((seed >> 8) & 255)
      }
      this.perm[i] = this.perm[i + 256] = v
      this.gradP[i] = this.gradP[i + 256] = this.grad3[v % 12]
    }
  }

  fade(t: number) {
    return t * t * t * (t * (t * 6 - 15) + 10)
  }

  lerp(a: number, b: number, t: number) {
    return (1 - t) * a + t * b
  }

  perlin2(x: number, y: number) {
    let X = Math.floor(x)
    let Y = Math.floor(y)
    x = x - X
    y = y - Y
    X = X & 255
    Y = Y & 255
    const n00 = this.gradP[X + this.perm[Y]].dot2(x, y)
    const n01 = this.gradP[X + this.perm[Y + 1]].dot2(x, y - 1)
    const n10 = this.gradP[X + 1 + this.perm[Y]].dot2(x - 1, y)
    const n11 = this.gradP[X + 1 + this.perm[Y + 1]].dot2(x - 1, y - 1)
    const u = this.fade(x)
    return this.lerp(
      this.lerp(n00, n10, u),
      this.lerp(n01, n11, u),
      this.fade(y)
    )
  }
}

export function Waves({
  lineColor = "hsl(var(--foreground))",
  backgroundColor = "transparent",
  waveSpeedX = 0.02,
  waveSpeedY = 0.01,
  waveAmpX = 40,
  waveAmpY = 20,
  xGap = 12,
  yGap = 36,
  friction = 0.9,
  tension = 0.01,
  maxCursorMove = 120,
  className,
}: WavesProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null)
  const boundingRef = useRef({ width: 0, height: 0, left: 0, top: 0 })
  const noiseRef = useRef(new Noise(Math.random()))
  const linesRef = useRef<any[]>([])
  const mouseRef = useRef({
    x: -10,
    y: 0,
    lx: 0,
    ly: 0,
    sx: 0,
    sy: 0,
    v: 0,
    vs: 0,
    a: 0,
    set: false,
  })

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return
    
    ctxRef.current = canvas.getContext("2d")
    if (!ctxRef.current) return

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
      
      ctxRef.current?.scale(dpr, dpr)
      init()
    }

    let rafId: number
    let points: Array<Array<{
      x: number
      y: number
      originX: number
      originY: number
      vx: number
      vy: number
    }>> = []

    const init = () => {
      points = []
      const rect = container.getBoundingClientRect()
      const cols = Math.floor(rect.width / xGap) + 2
      const rows = Math.floor(rect.height / yGap) + 2

      for (let i = 0; i < cols; i++) {
        const col = []
        for (let j = 0; j < rows; j++) {
          col.push({
            x: i * xGap,
            y: j * yGap,
            originX: i * xGap,
            originY: j * yGap,
            vx: 0,
            vy: 0,
          })
        }
        points.push(col)
      }
    }

    const animate = () => {
      const ctx = ctxRef.current
      if (!ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = backgroundColor
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const time = Date.now() * 0.001
      const mouse = mouseRef.current

      // Draw vertical lines
      for (let i = 0; i < points.length; i++) {
        ctx.beginPath()
        ctx.strokeStyle = lineColor

        for (let j = 0; j < points[i].length; j++) {
          const point = points[i][j]

          // Mouse interaction
          const dx = mouse.x - point.x
          const dy = mouse.y - point.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < maxCursorMove) {
            const force = (1 - dist / maxCursorMove) * tension
            point.vx += dx * force
            point.vy += dy * force
          }

          // Physics
          point.vx *= friction
          point.vy *= friction

          // Spring back to original position
          const springX = (point.originX - point.x) * tension
          const springY = (point.originY - point.y) * tension

          point.vx += springX
          point.vy += springY

          point.x += point.vx
          point.y += point.vy

          // Wave effect
          const waveX = Math.sin(time * waveSpeedX + j * 0.5) * waveAmpX
          const waveY = Math.sin(time * waveSpeedY + i * 0.5) * waveAmpY

          const x = point.x + waveX
          const y = point.y + waveY

          if (j === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        ctx.stroke()
      }

      rafId = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      }
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    window.addEventListener('mousemove', handleMouseMove)

    animate()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [
    lineColor,
    backgroundColor,
    waveSpeedX,
    waveSpeedY,
    waveAmpX,
    waveAmpY,
    friction,
    tension,
    maxCursorMove,
    xGap,
    yGap,
  ])

  return (
    <div
      ref={containerRef}
      style={{
        backgroundColor,
      }}
      className={cn(
        "absolute top-0 left-0 w-full h-full overflow-hidden",
        className,
      )}
    >
      <div
        className={cn(
          "absolute top-0 left-0 rounded-full",
          "w-2 h-2 bg-foreground/10",
        )}
        style={{
          transform:
            "translate3d(calc(var(--x) - 50%), calc(var(--y) - 50%), 0)",
          willChange: "transform",
        }}
      />
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  )
}
