"use client";

import { motion } from "framer-motion";
import { SceneCanvas } from "@/components/3d/SceneCanvas";
import { Navbar } from "@/components/ui/Navbar";
import {
    AboutHero,
    PerformanceSection,
    PhilosophySection,
    ProcessSection,
    TrustSection
} from "@/components/sections/AboutSections";

export default function AboutPage() {
    return (
        <main className="relative w-full bg-background scroll-smooth">
            {/* 3D Core Layer */}
            <SceneCanvas />

            {/* UI Layer */}
            <div className="relative z-10 w-full overflow-x-hidden">
                <Navbar />

                {/* Section 1: Main Hero - The Structure of Choice */}
                <AboutHero />

                {/* Section 2: Performance - Data-Driven Design */}
                <PerformanceSection />

                {/* Section 3: Philosophy - Logic over Aesthetics */}
                <PhilosophySection />

                {/* Section 4: Process - Transparent Workflow */}
                <ProcessSection />

                {/* Section 5: Trust - R:NEW Identity */}
                <TrustSection />

                {/* Footer */}
                <footer className="py-20 border-t border-white/5 text-center text-gray-700 text-[10px] tracking-[0.4em] uppercase font-bold">
                    &copy; 2024 R:new Design Studio. All Rights Reserved.
                </footer>
            </div>
        </main>
    );
}
