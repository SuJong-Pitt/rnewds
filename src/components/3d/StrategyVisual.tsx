"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Text, PerspectiveCamera, Environment } from "@react-three/drei";
import * as THREE from "three";

function WireframeGrid() {
    return (
        <group rotation={[-Math.PI / 8, 0, 0]} position={[0, 0, -3]}>
            {/* Main Page Canvas */}
            <mesh>
                <planeGeometry args={[12, 16]} />
                <meshStandardMaterial color="#333" wireframe transparent opacity={0.05} />
            </mesh>

            {/* Strategic Layout Blocks */}
            {Array.from({ length: 12 }).map((_, i) => (
                <mesh
                    key={i}
                    position={[
                        (i % 3 - 1) * 3.5,
                        6 - i * 1.2,
                        0.1
                    ]}
                >
                    <planeGeometry args={[3, 0.4]} />
                    <meshStandardMaterial
                        color={i % 2 === 0 ? "#a259ff" : "#3ed8ff"}
                        wireframe
                        opacity={0.15}
                        transparent
                    />
                </mesh>
            ))}

            {/* Floating Connection Lines */}
            <mesh rotation={[0, 0, Math.PI / 4]}>
                <planeGeometry args={[20, 0.1]} />
                <meshStandardMaterial color="#ffffff" transparent opacity={0.02} />
            </mesh>
        </group>
    );
}

function Magnifier() {
    const groupRef = useRef<THREE.Group>(null);
    const lensRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!groupRef.current) return;

        // Smoother mouse following
        const x = (state.mouse.x * state.viewport.width) / 2;
        const y = (state.mouse.y * state.viewport.height) / 2;

        groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, x, 0.1);
        groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, y, 0.1);
        groupRef.current.position.z = 3;

        // Subtle tilt based on movement
        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, state.mouse.x * 0.2, 0.1);
        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -state.mouse.y * 0.2, 0.1);
    });

    return (
        <group ref={groupRef}>
            {/* Premium Handle */}
            <mesh position={[0.8, -1.8, -0.1]} rotation={[0, 0, -Math.PI / 4]}>
                <cylinderGeometry args={[0.08, 0.1, 2.2, 32]} />
                <meshPhysicalMaterial
                    color="#111"
                    roughness={0.1}
                    metalness={1}
                    clearcoat={1}
                />
            </mesh>

            {/* Polished Chrome Ring */}
            <mesh>
                <torusGeometry args={[1.3, 0.06, 32, 100]} />
                <meshPhysicalMaterial
                    color="#ffffff"
                    roughness={0.05}
                    metalness={1}
                    emissive="#ffffff"
                    emissiveIntensity={0.2}
                />
            </mesh>

            {/* Accurate Convex Lens */}
            <mesh ref={lensRef} position={[0, 0, 0.05]} scale={[1, 1, 0.15]}>
                <sphereGeometry args={[1.25, 64, 64]} />
                <meshPhysicalMaterial
                    transparent
                    transmission={1}
                    thickness={2}
                    roughness={0.02}
                    ior={1.5}
                    color="#f0f5ff"
                    attenuationDistance={0.5}
                    attenuationColor="#ffffff"
                />
            </mesh>

            {/* Glowing Strategic Symbols */}
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <group position={[0, 0, 0.2]}>
                    <Text
                        position={[-0.4, 0.3, 0]}
                        fontSize={0.4}
                        color="#ff3399"
                    >
                        ❤
                        <meshBasicMaterial color="#ff3399" toneMapped={false} />
                    </Text>
                    <Text
                        position={[0.4, -0.3, 0]}
                        fontSize={0.5}
                        color="#00f3ff"
                    >
                        $
                        <meshBasicMaterial color="#00f3ff" toneMapped={false} />
                    </Text>

                    {/* Inner Lens Glow - Fixed Props */}
                    <pointLight intensity={10} distance={2} color="#ffffff" />
                    <pointLight position={[-0.4, 0.3, 0]} intensity={5} distance={1} color="#ff3399" />
                    <pointLight position={[0.4, -0.3, 0]} intensity={5} distance={1} color="#3ed8ff" />
                </group>
            </Float>
        </group>
    );
}

export function StrategyVisual() {
    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={35} />

            {/* Dynamic Lighting */}
            <ambientLight intensity={0.2} />
            <spotLight
                position={[10, 10, 10]}
                angle={0.15}
                penumbra={1}
                intensity={100}
            />
            <pointLight position={[-10, -10, -10]} color="#a259ff" intensity={30} />
            <pointLight position={[10, 5, 5]} color="#3ed8ff" intensity={20} />

            <WireframeGrid />
            <Magnifier />

            <Environment preset="night" />
        </>
    );
}
