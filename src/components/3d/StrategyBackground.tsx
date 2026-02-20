"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Environment, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

function Bubble({ position, color, scale, speed }: any) {
    const meshRef = useRef<THREE.Mesh>(null);
    const initialY = position[1];

    useFrame((state) => {
        if (!meshRef.current) return;
        const time = state.clock.getElapsedTime();
        meshRef.current.position.y = initialY + Math.sin(time * speed) * 0.5;
        meshRef.current.rotation.x = time * 0.2;
        meshRef.current.rotation.y = time * 0.3;
    });

    return (
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh ref={meshRef} position={position} scale={scale}>
                <sphereGeometry args={[1, 64, 64]} />
                <meshPhysicalMaterial
                    color={color}
                    metalness={0.2}
                    roughness={0.1}
                    transmission={0.4}
                    thickness={1}
                    ior={1.45}
                    iridescence={0.3}
                    envMapIntensity={1}
                />
            </mesh>
        </Float>
    );
}

export function StrategyBackground() {
    const bubbles = useMemo(() => [
        // Top Right - Gold/Yellow
        { position: [4, 4, -2], color: "#fbbf24", scale: 2.5, speed: 0.6 },
        { position: [2, 3, -4], color: "#f59e0b", scale: 1.5, speed: 0.8 },

        // Top Left - Purple
        { position: [-5, 3, -3], color: "#a259ff", scale: 2, speed: 0.5 },

        // Center - White/Silver
        { position: [0, 0, -5], color: "#ffffff", scale: 1.8, speed: 0.7 },

        // Mid Right - Purple
        { position: [5, -1, -3], color: "#7c3aed", scale: 2.2, speed: 0.4 },

        // Bottom Left - Pink/Purple
        { position: [-4, -4, -2], color: "#ff0080", scale: 2.8, speed: 0.5 },

        // Bottom Right - Blue
        { position: [4, -5, -4], color: "#3ed8ff", scale: 2, speed: 0.9 },

        // Small decorative ones
        { position: [-2, 2, -6], color: "#3ed8ff", scale: 0.8, speed: 1.2 },
        { position: [3, -2, -6], color: "#ffffff", scale: 0.6, speed: 1.5 },
    ], []);

    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={45} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1.5} />
            <spotLight position={[-10, 20, 10]} angle={0.2} penumbra={1} intensity={2} />

            {bubbles.map((bubble, i) => (
                <Bubble key={i} {...bubble} />
            ))}

            <Environment preset="city" />
        </>
    );
}
