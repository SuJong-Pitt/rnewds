"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import {
    Float,
    MeshWobbleMaterial,
    Environment,
    PresentationControls,
    Sphere,
    TorusKnot
} from "@react-three/drei";
import * as THREE from "three";

function PaintFlow({ progress }: { progress: number }) {
    const meshRef = useRef<THREE.Mesh>(null);
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (!meshRef.current || !groupRef.current) return;
        const time = state.clock.getElapsedTime();
        groupRef.current.rotation.y = time * 0.3;
        const s = 1 + progress * 0.5;
        meshRef.current.scale.set(s, s, s);
    });

    return (
        <group ref={groupRef}>
            <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                <TorusKnot ref={meshRef} args={[1, 0.3, 128, 32]}>
                    <MeshWobbleMaterial
                        color="#a78bfa"
                        speed={1.5}
                        factor={0.4}
                        roughness={0.1}
                        metalness={0.2}
                    />
                </TorusKnot>
            </Float>
            {Array.from({ length: 5 }).map((_, i) => (
                <Sphere
                    key={i}
                    args={[0.2, 32, 32]}
                    position={[
                        Math.sin(i * 2) * 2,
                        Math.cos(i * 2) * 2,
                        Math.sin(i) * 1
                    ]}
                >
                    <meshStandardMaterial color={i % 2 === 0 ? "#00d2ff" : "#ff00aa"} />
                </Sphere>
            ))}
        </group>
    );
}

export function IdentityVisual({ progress }: { progress: number }) {
    return (
        <div className="w-full h-full relative">
            <Canvas camera={{ position: [0, 0, 5], fov: 40 }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#ffffff" />
                <PresentationControls
                    global
                    config={{ mass: 2, tension: 500 }}
                    snap={{ mass: 3, tension: 1500 }}
                >
                    <PaintFlow progress={progress} />
                </PresentationControls>
                <Environment preset="studio" />
            </Canvas>
        </div>
    );
}
