"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera, Environment, ContactShadows, Text } from "@react-three/drei";
import * as THREE from "three";

function BoxButton({ onClick }: { onClick: () => void }) {
    const groupRef = useRef<THREE.Group>(null);
    const lidRef = useRef<THREE.Mesh>(null);
    const [hovered, setHovered] = useState(false);

    useFrame((state) => {
        if (!lidRef.current) return;
        const targetRotation = hovered ? -Math.PI * 0.6 : 0;
        lidRef.current.rotation.x = THREE.MathUtils.lerp(
            lidRef.current.rotation.x,
            targetRotation,
            0.1
        );

        if (groupRef.current) {
            groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
        }
    });

    return (
        <group
            ref={groupRef}
            onClick={onClick}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
        >
            {/* Box Body */}
            <mesh position={[0, -0.5, 0]}>
                <boxGeometry args={[3, 2, 3]} />
                <meshStandardMaterial color="#1a1a1a" roughness={0.1} metalness={0.8} />
            </mesh>

            {/* Box Interior / Core Light */}
            <mesh position={[0, -0.4, 0]}>
                <boxGeometry args={[2.8, 1.8, 2.8]} />
                <meshStandardMaterial
                    color="#a259ff"
                    emissive="#a259ff"
                    emissiveIntensity={hovered ? 2 : 0.5}
                />
            </mesh>

            {/* Box Lid (Animated) */}
            <group ref={lidRef} position={[0, 0.5, -1.5]}>
                <mesh position={[0, 0, 1.5]}>
                    <boxGeometry args={[3.1, 0.3, 3.1]} />
                    <meshStandardMaterial color="#2a2a2a" roughness={0.1} metalness={0.9} />
                </mesh>
            </group>

            {/* Label on Box */}
            <Text
                position={[0, -0.5, 1.51]}
                fontSize={0.2}
                color="white"
                anchorX="center"
                anchorY="middle"
                maxWidth={2.5}
                textAlign="center"
            >
                PREMIUM STRATEGY
            </Text>
        </group>
    );
}

export function ContactVisual() {
    return (
        <>
            <Environment preset="city" />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />

            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
                <BoxButton onClick={() => window.location.href = "#"} />
            </Float>

            <ContactShadows
                position={[0, -1.5, 0]}
                opacity={0.4}
                scale={10}
                blur={2}
                far={4.5}
            />
        </>
    );
}
