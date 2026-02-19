"use client";

import { Canvas } from "@react-three/fiber";
import { HeroScene } from "./HeroScene";
import { DesignerAmbient } from "./BackgroundParticles";
import { Suspense } from "react";

export function SceneCanvas() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            <Canvas
                shadows
                camera={{ position: [0, 0, 5], fov: 45 }}
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: "high-performance"
                }}
                dpr={[1, 2]}
            >
                <Suspense fallback={null}>
                    <DesignerAmbient />
                    <HeroScene />
                </Suspense>
            </Canvas>
        </div>
    );
}
