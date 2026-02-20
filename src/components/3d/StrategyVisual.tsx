"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Text, PerspectiveCamera, Environment } from "@react-three/drei";
import * as THREE from "three";

function WireframeGrid() {
    return (
        <group rotation={[-Math.PI / 6, 0, 0]} position={[0, 0, -2]}>
            {/* Main Page Structure */}
            <mesh>
                <planeGeometry args={[10, 14]} />
                <meshStandardMaterial color="#ffffff" wireframe transparent opacity={0.1} />
            </mesh>

            {/* Block Elements */}
            {Array.from({ length: 8 }).map((_, i) => (
                <mesh
                    key={i}
                    position={[
                        (i % 2 === 0 ? -2 : 2),
                        4 - i * 1.5,
                        0.1
                    ]}
                >
                    <planeGeometry args={[3, 0.6]} />
                    <meshStandardMaterial color="#a259ff" wireframe opacity={0.2} transparent />
                </mesh>
            ))}
        </group>
    );
}

function Magnifier() {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (!groupRef.current) return;
        const x = (state.mouse.x * state.viewport.width) / 2;
        const y = (state.mouse.y * state.viewport.height) / 2;
        groupRef.current.position.set(x, y, 2.5);
    });

    return (
        <group ref={groupRef}>
            {/* Handle */}
            <mesh position={[0.8, -1.8, 0]} rotation={[0, 0, -Math.PI / 4]}>
                <cylinderGeometry args={[0.1, 0.12, 2, 16]} />
                <meshStandardMaterial color="#444" roughness={0.3} metalness={0.8} />
            </mesh>

            {/* Ring */}
            <mesh>
                <torusGeometry args={[1.2, 0.08, 16, 64]} />
                <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.9} />
            </mesh>

            {/* Lens */}
            <mesh>
                <circleGeometry args={[1.15, 32]} />
                <meshPhysicalMaterial
                    transparent
                    opacity={0.3}
                    transmission={0.9}
                    thickness={0.5}
                    roughness={0}
                    color="#e0eaff"
                />
            </mesh>

            {/* Symbols */}
            <Text
                position={[-0.3, 0.2, 0.1]}
                fontSize={0.5}
                color="#ff0080"
            >
                ❤
            </Text>
            <Text
                position={[0.3, -0.3, 0.1]}
                fontSize={0.5}
                color="#3ed8ff"
            >
                $
            </Text>
            <pointLight intensity={5} distance={3} color="#a259ff" />
        </group>
    );
}

export function StrategyVisual() {
    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={40} />
            <ambientLight intensity={1} />
            <pointLight position={[10, 10, 10]} intensity={50} />
            <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={50} />

            <WireframeGrid />
            <Magnifier />

            <Environment preset="city" />
        </>
    );
}
