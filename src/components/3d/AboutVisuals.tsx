"use client";

import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { Float, MeshDistortMaterial } from "@react-three/drei";

export function ArchitecturalGrid() {
    const linesRef = useRef<THREE.Group>(null);
    const count = 20;
    const spacing = 2;

    const gridLines = useMemo(() => {
        const lines = [];
        // Horizontal lines
        for (let i = -count; i <= count; i++) {
            lines.push({
                start: [-count * spacing, 0, i * spacing],
                end: [count * spacing, 0, i * spacing],
            });
            // Vertical lines
            lines.push({
                start: [i * spacing, 0, -count * spacing],
                end: [i * spacing, 0, count * spacing],
            });
        }
        return lines;
    }, []);

    useFrame((state) => {
        if (linesRef.current) {
            linesRef.current.rotation.y = state.mouse.x * 0.1;
            linesRef.current.rotation.x = -Math.PI / 6 + state.mouse.y * 0.05;
        }
    });

    return (
        <group ref={linesRef} position={[0, -2, -10]}>
            {gridLines.map((line, i) => (
                <line key={i}>
                    <bufferGeometry attach="geometry">
                        <float32BufferAttribute
                            attach="attributes-position"
                            args={[new Float32Array([...line.start, ...line.end]), 3]}
                        />
                    </bufferGeometry>
                    <lineBasicMaterial attach="material" color="#4B2C96" transparent opacity={0.2} />
                </line>
            ))}

            {/* Structural Nodes */}
            {[-10, 0, 10].map((x) =>
                [-10, 0, 10].map((z) => (
                    <mesh key={`${x}-${z}`} position={[x, 0, z]}>
                        <boxGeometry args={[0.5, 0.5, 0.5]} />
                        <meshBasicMaterial color="#A259FF" wireframe />
                    </mesh>
                ))
            )}
        </group>
    );
}

export function DataLayers() {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.children.forEach((layer, i) => {
                layer.position.y = Math.sin(state.clock.elapsedTime + i * 0.5) * 0.1;
                layer.rotation.z = Math.sin(state.clock.elapsedTime * 0.2 + i) * 0.05;
            });
        }
    });

    return (
        <group ref={groupRef} rotation={[Math.PI / 6, -Math.PI / 4, 0]}>
            {[...Array(15)].map((_, i) => (
                <mesh key={i} position={[0, i * 0.4 - 3, 0]}>
                    <boxGeometry args={[6, 0.05, 4]} />
                    <meshPhysicalMaterial
                        transparent
                        opacity={0.1 + (i / 15) * 0.2}
                        color="#A259FF"
                        metalness={0.9}
                        roughness={0.1}
                        transmission={0.5}
                        thickness={1}
                    />
                </mesh>
            ))}
        </group>
    );
}

export function LogicVisual() {
    return (
        <group position={[0, 0, -5]}>
            {/* Left side: Aesthetics (Organic/Abstract) */}
            <Float speed={5} rotationIntensity={2} floatIntensity={2}>
                <mesh position={[-4, 0, 0]}>
                    <sphereGeometry args={[1.5, 64, 64]} />
                    <MeshDistortMaterial
                        color="#FF0080"
                        speed={3}
                        distort={0.6}
                        radius={1}
                    />
                </mesh>
            </Float>

            {/* Right side: Logic (Geometric/Calculated) */}
            <mesh position={[4, 0, 0]}>
                <boxGeometry args={[2.5, 2.5, 2.5]} />
                <meshStandardMaterial color="#ffffff" wireframe />

                {/* Dimension Lines */}
                <group>
                    <line>
                        <bufferGeometry attach="geometry">
                            <float32BufferAttribute
                                attach="attributes-position"
                                args={[new Float32Array([-2, 1.5, 0, 2, 1.5, 0]), 3]}
                            />
                        </bufferGeometry>
                        <lineBasicMaterial color="#A259FF" />
                    </line>
                </group>
            </mesh>

            {/* Connection Arrow */}
            <mesh position={[0, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
                <coneGeometry args={[0.2, 0.5, 32]} />
                <meshBasicMaterial color="#A259FF" />
            </mesh>
        </group>
    );
}
