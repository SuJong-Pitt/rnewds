"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function DesignerAmbient() {
    const points = useRef<THREE.Points>(null);

    const particleCount = 100;
    const positions = useMemo(() => {
        const pos = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        const colorPalette = [
            new THREE.Color("#ff007f"),
            new THREE.Color("#00f2ff"),
            new THREE.Color("#7c3aed"),
            new THREE.Color("#ffffff"),
        ];

        for (let i = 0; i < particleCount; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 15;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 5;

            const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;
        }
        return { positions: pos, colors };
    }, []);

    useFrame((state) => {
        if (!points.current) return;
        const time = state.clock.getElapsedTime();
        points.current.rotation.y = time * 0.03;
        points.current.position.y = Math.sin(time * 0.5) * 0.3;
        const posAttr = points.current.geometry.attributes.position;
        for (let i = 0; i < particleCount; i++) {
            const x = posAttr.getX(i);
            const move = Math.sin(time + x) * 0.002;
            posAttr.setY(i, posAttr.getY(i) + move);
        }
        posAttr.needsUpdate = true;
    });

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={positions.positions.length / 3}
                    array={positions.positions}
                    itemSize={3}
                    args={[positions.positions, 3]}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={positions.colors.length / 3}
                    array={positions.colors}
                    itemSize={3}
                    args={[positions.colors, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.15}
                vertexColors
                transparent
                opacity={0.2}
                sizeAttenuation={true}
                blending={THREE.AdditiveBlending}
                depthWrite={false}
            />
        </points>
    );
}
