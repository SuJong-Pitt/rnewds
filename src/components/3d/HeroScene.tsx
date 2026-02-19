"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import {
    Float,
    MeshDistortMaterial,
    Environment,
    ContactShadows,
    PerspectiveCamera,
    Sphere
} from "@react-three/drei";
import * as THREE from "three";

function ColorFragment({ position, color, speed, scale, index }: any) {
    const meshRef = useRef<THREE.Mesh>(null);
    const initialPos = useRef(new THREE.Vector3(...position));

    useFrame((state) => {
        if (!meshRef.current) return;
        const time = state.clock.getElapsedTime();
        const mouse = state.mouse;

        // Individual organic wobble
        const wobble = Math.sin(time * speed + index) * 0.2;

        // Mouse interaction
        const mousePoint = new THREE.Vector3(mouse.x * 5, mouse.y * 5, 0);
        const dist = meshRef.current.position.distanceTo(mousePoint);
        const pushForce = new THREE.Vector3();

        if (dist < 3) {
            pushForce.subVectors(meshRef.current.position, mousePoint).normalize().multiplyScalar(0.1);
        }

        const targetPos = initialPos.current.clone();
        targetPos.y += Math.sin(time * 0.5 + index) * 0.5;
        targetPos.x += Math.cos(time * 0.3 + index) * 0.5;

        meshRef.current.position.lerp(targetPos.add(pushForce), 0.05);
        meshRef.current.scale.setScalar(scale * (1 + wobble * 0.2));
    });

    return (
        <Sphere ref={meshRef} args={[1, 16, 16]} position={position}>
            <MeshDistortMaterial
                color={color}
                speed={speed}
                distort={0.3}
                radius={1}
                roughness={0.2}
                metalness={0.1}
                transparent
                opacity={0.7} // 살짝 투명하게 해서 가독성 방해 최소화
            />
        </Sphere>
    );
}

export function HeroScene() {
    const groupRef = useRef<THREE.Group>(null);
    const fragmentsCount = 20;

    const fragments = useMemo(() => {
        const colors = ["#ff0080", "#00d2ff", "#7c3aed", "#fbbf24", "#ffffff"];
        return Array.from({ length: fragmentsCount }).map((_, i) => ({
            position: [
                (Math.random() - 0.5) * 12, // 더 넓게 퍼뜨림
                (Math.random() - 0.5) * 10,
                -5 - Math.random() * 5, // Z축을 -5 이하로 밀어서 텍스트 레이어와 완전히 분리
            ],
            color: colors[i % colors.length],
            speed: Math.random() * 1.5 + 0.5,
            scale: Math.random() * 0.5 + 0.3, // 크기를 조금 키워도 뒤에 있어서 가독성 방해 안함
        }));
    }, []);

    return (
        <>
            <Environment preset="studio" />
            <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={35} />

            <spotLight position={[15, 15, 15]} angle={0.2} penumbra={1} intensity={5} color="#ffffff" />

            <group ref={groupRef}>
                <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                    {fragments.map((frag, i) => (
                        <ColorFragment key={i} {...frag} index={i} />
                    ))}
                </Float>
            </group>

            <ContactShadows
                position={[0, -4, 0]}
                opacity={0.3}
                scale={25}
                blur={2.5}
                far={10}
                color="#000000"
            />

            <color attach="background" args={["#030014"]} />
        </>
    );
}
