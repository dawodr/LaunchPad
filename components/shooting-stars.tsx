"use client"

import { useEffect, useRef, useState } from "react"

interface ShootingStar {
  id: number
  x: number
  y: number
  angle: number
  scale: number
  speed: number
  distance: number
}

const getRandomStartPoint = () => {
  const side = Math.floor(Math.random() * 4)
  const offset = Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000)

  switch (side) {
    case 0:
      return { x: offset, y: 0, angle: 45 }
    case 1:
      return { x: typeof window !== "undefined" ? window.innerWidth : 1000, y: offset, angle: 135 }
    case 2:
      return { x: offset, y: typeof window !== "undefined" ? window.innerHeight : 800, angle: 225 }
    case 3:
      return { x: 0, y: offset, angle: 315 }
    default:
      return { x: 0, y: 0, angle: 45 }
  }
}

export function ShootingStars() {
  const [star, setStar] = useState<ShootingStar | null>(null)
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const createStar = () => {
      const { x, y, angle } = getRandomStartPoint()
      const newStar: ShootingStar = {
        id: Date.now(),
        x,
        y,
        angle,
        scale: 1,
        speed: Math.random() * 20 + 10,
        distance: 0,
      }
      setStar(newStar)

      const randomDelay = Math.random() * 4500 + 4200
      setTimeout(createStar, randomDelay)
    }

    createStar()

    return () => {}
  }, [])

  useEffect(() => {
    const moveStar = () => {
      if (star) {
        setStar((prevStar) => {
          if (!prevStar) return null
          const newX = prevStar.x + prevStar.speed * Math.cos((prevStar.angle * Math.PI) / 180)
          const newY = prevStar.y + prevStar.speed * Math.sin((prevStar.angle * Math.PI) / 180)
          const newDistance = prevStar.distance + prevStar.speed
          const newScale = 1 + newDistance / 100
          
          const windowWidth = typeof window !== "undefined" ? window.innerWidth : 1000
          const windowHeight = typeof window !== "undefined" ? window.innerHeight : 800
          
          if (newX < -20 || newX > windowWidth + 20 || newY < -20 || newY > windowHeight + 20) {
            return null
          }
          return {
            ...prevStar,
            x: newX,
            y: newY,
            distance: newDistance,
            scale: newScale,
          }
        })
      }
    }

    const animationFrame = requestAnimationFrame(moveStar)
    return () => cancelAnimationFrame(animationFrame)
  }, [star])

  return (
    <svg ref={svgRef} width="100%" height="100%" style={{ position: "absolute", top: 0, left: 0 }}>
      {star && (
        <rect
          key={star.id}
          x={star.x}
          y={star.y}
          width={10 * star.scale}
          height="2"
          fill="url(#gradient)"
          transform={`rotate(${star.angle}, ${star.x + (10 * star.scale) / 2}, ${star.y + 1})`}
        />
      )}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#2EB9DF", stopOpacity: 0 }} />
          <stop offset="100%" style={{ stopColor: "#9E00FF", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
    </svg>
  )
}
