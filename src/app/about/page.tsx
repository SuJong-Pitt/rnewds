"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/ui/Navbar";
import {
    AboutHero,
    PhilosophySection,
    ProcessSection,
    TrustSection
} from "@/components/sections/AboutSections";

export default function AboutPage() {
    return (
        <main className="relative w-full bg-white scroll-smooth selection:bg-blue-100 selection:text-blue-900">
            <Navbar />

            {/* UI Layer */}
            <div className="relative z-10 w-full overflow-x-hidden">
                {/* Section 1: Main Hero - The Structure of Choice */}
                <AboutHero />


                {/* Section 3: Philosophy - Logic over Aesthetics */}
                <PhilosophySection />

                {/* Section 4: Process - Transparent Workflow */}
                <ProcessSection />

                {/* Section 5: Trust - R:NEW Identity */}
                <TrustSection />

                {/* Footer */}
                <footer className="py-20 border-t border-slate-100 text-center text-slate-400 text-[10px] tracking-[0.4em] uppercase font-bold bg-white">
                    &copy; 2024 R:new Design Studio. All Rights Reserved.
                </footer>
            </div>
        </main>
    );
}
