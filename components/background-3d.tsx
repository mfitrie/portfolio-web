"use client"

import { Environment, OrbitControls, useGLTF } from "@react-three/drei"
import { Suspense, useEffect } from "react"
import * as THREE from "three"
import ClientOnly from "./client-only"
import { Canvas } from "@react-three/fiber"

// Preload the model for better performance
useGLTF.preload("/assets/3d/tenhun_falling_spaceman_fanart.glb")

function Model() {
    const { scene } = useGLTF("/3d/tenhun_falling_spaceman_fanart.glb")

    useEffect(() => {
        // Center the model by calculating its bounding box
        const box = new THREE.Box3().setFromObject(scene)
        const center = box.getCenter(new THREE.Vector3())

        // Offset the model so its center is at the origin
        scene.position.x = -center.x
        // scene.position.y = 3
        scene.position.y = 1
        scene.position.z = -center.z
    }, [scene])

    return (
        <primitive
            object={scene}
            // scale={[1.5, -1.5, 1.5]} // x,y,z
            scale={[1.5, 1.5, 1.5]} // x,y,z
        />
    )
}

export default function Background3d() {
    return (
        <div className="absolute inset-0 -z-10">
            <ClientOnly>
                {/* 3D Background Canvas */}
                <Canvas
                    camera={{
                        position: [0, 0, 6],
                        fov: 60,
                        near: 0.1,
                        far: 1000
                    }}
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
                            // autoRotateSpeed={0.5}
                            autoRotateSpeed={10}
                            target={[0, 1.5, 0]}
                        />
                    </Suspense>
                </Canvas>
            </ClientOnly>
        </div>
    )
}