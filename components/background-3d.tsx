"use client"

import type React from "react"

import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useState } from "react"
import * as THREE from "three"

function ParticleField() {
  const meshRef = useRef<THREE.Points>(null)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  // Create particle positions
  const particleCount = 1000
  const positions = new Float32Array(particleCount * 3)

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 50
    positions[i * 3 + 1] = (Math.random() - 0.5) * 50
    positions[i * 3 + 2] = (Math.random() - 0.5) * 30
  }

  useFrame((state) => {
    if (meshRef.current) {
      // Smooth rotation
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, mouse.y * 0.3, 0.05)
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, mouse.x * 0.3, 0.05)

      // Gentle floating motion
      meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.05
    }
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particleCount} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#3b82f6"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function WaveGeometry() {
  const meshRef = useRef<THREE.Mesh>(null)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime()
      const geometry = meshRef.current.geometry
      const positionAttribute = geometry.getAttribute("position")

      for (let i = 0; i < positionAttribute.count; i++) {
        const x = positionAttribute.getX(i)
        const y = positionAttribute.getY(i)

        const distance = Math.sqrt(Math.pow(x - mouse.x * 5, 2) + Math.pow(y - mouse.y * 5, 2))

        const z = Math.sin(distance - time) * 0.5 + Math.sin(time * 0.5) * 0.3
        positionAttribute.setZ(i, z)
      }

      positionAttribute.needsUpdate = true
      meshRef.current.rotation.z = time * 0.1
    }
  })

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 4, 0, 0]} position={[0, 0, -5]}>
      <planeGeometry args={[20, 20, 50, 50]} />
      <meshStandardMaterial color="#1e40af" wireframe transparent opacity={0.15} />
    </mesh>
  )
}

export function Background3D() {
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = event
    const { width, height } = currentTarget.getBoundingClientRect()

    const x = (clientX / width) * 2 - 1
    const y = -(clientY / height) * 2 + 1

    // Update mouse position for both components
    const canvas = currentTarget.querySelector("canvas")
    if (canvas) {
      canvas.dispatchEvent(new CustomEvent("mousemove", { detail: { x, y } }))
    }
  }

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }} onMouseMove={handleMouseMove}>
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }} style={{ background: "transparent" }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <ParticleField />
        <WaveGeometry />
      </Canvas>
    </div>
  )
}
