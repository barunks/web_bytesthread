import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function GalaxyParticles() {
  const meshRef = useRef<THREE.Points>(null)
  const linesRef = useRef<THREE.LineSegments>(null)

  const { positions, colors } = useMemo(() => {
    const count = 6000
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const color = new THREE.Color()

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      const radius = Math.random() * 80 + 5
      const spinAngle = radius * 0.3
      const branchAngle = ((i % 3) / 3) * Math.PI * 2
      const randomX = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 3
      const randomY = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 3
      const randomZ = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 3

      positions[i3]     = Math.cos(branchAngle + spinAngle) * radius + randomX
      positions[i3 + 1] = randomY * 0.5
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ

      const mixedColor = color.clone()
      const insideColor = new THREE.Color('#0ea5e9')
      const outsideColor = new THREE.Color('#1e1b4b')
      mixedColor.lerpColors(insideColor, outsideColor, radius / 80)

      colors[i3]     = mixedColor.r
      colors[i3 + 1] = mixedColor.g
      colors[i3 + 2] = mixedColor.b
    }
    return { positions, colors }
  }, [])

  // Connecting lines between nearby particles (bytes/thread concept)
  const linePositions = useMemo(() => {
    const pts: number[] = []
    const count = 120
    for (let i = 0; i < count; i++) {
      const r1 = Math.random() * 40
      const a1 = Math.random() * Math.PI * 2
      const x1 = Math.cos(a1) * r1
      const z1 = Math.sin(a1) * r1
      const y1 = (Math.random() - 0.5) * 10

      const r2 = r1 + (Math.random() - 0.5) * 8
      const a2 = a1 + (Math.random() - 0.5) * 0.5
      const x2 = Math.cos(a2) * r2
      const z2 = Math.sin(a2) * r2
      const y2 = (Math.random() - 0.5) * 10

      pts.push(x1, y1, z1, x2, y2, z2)
    }
    return new Float32Array(pts)
  }, [])

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.04
    }
    if (linesRef.current) {
      linesRef.current.rotation.y += delta * 0.04
    }
  })

  return (
    <>
      <points ref={meshRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.25} sizeAttenuation vertexColors transparent opacity={0.85} />
      </points>

      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#0ea5e9" transparent opacity={0.15} />
      </lineSegments>
    </>
  )
}

export default function GalaxyBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 20, 60], fov: 60 }}
        gl={{ antialias: false, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <GalaxyParticles />
      </Canvas>
    </div>
  )
}
