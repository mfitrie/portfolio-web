"use client"

import ClientOnly from "@/components/client-only"
import { Environment, OrbitControls, useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense, useEffect } from "react"
import * as THREE from "three"

function Model() {
  const { scene } = useGLTF("/3d/tenhun_falling_spaceman_fanart.glb")

  useEffect(() => {
    // Center the model by calculating its bounding box
    const box = new THREE.Box3().setFromObject(scene)
    const center = box.getCenter(new THREE.Vector3())

    // Offset the model so its center is at the origin
    scene.position.x = -center.x
    scene.position.y = -center.y
    scene.position.z = -center.z
  }, [scene])

  return (
    <primitive
      object={scene}
      scale={1.5}
    />
  )
}

// Preload the model for better performance
useGLTF.preload("/assets/3d/tenhun_falling_spaceman_fanart.glb")

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      <ClientOnly>
        {/* 3D Background Canvas */}
        <div className="absolute inset-0 -z-10">
          <Canvas
            camera={{
              position: [0, 0, 5],
              fov: 50,
              near: 0.1,
              far: 1000
            }}
            // className="bg-gradient-to-b from-slate-900 to-slate-800"
          >
            <Suspense fallback={null}>
              {/* Lighting */}
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <pointLight position={[-10, -10, -5]} intensity={0.5} />

              {/* Your GLB Model - now centered */}
              <Model />

              {/* Optional: Environment for realistic reflections */}
              <Environment preset="sunset" />

              {/* Camera controls centered on origin */}
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={0.5}
                target={[0, 1.5, 0]}
              />
            </Suspense>
          </Canvas>
        </div>
      </ClientOnly>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-screen">
        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance text-white drop-shadow-lg">
          Hello, I'm Fitrie
        </h1>
      </div>
    </div>
  )
}