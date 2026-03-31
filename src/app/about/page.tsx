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
                <footer className="section-padding bg-white border-t border-slate-100 relative overflow-hidden">
                    <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col md:flex-row justify-between items-center gap-10">
                        <div className="flex flex-col items-center md:items-start gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-slate-950 rounded-lg flex items-center justify-center text-white text-xs font-black">R</div>
                                <span className="font-heading font-black tracking-tighter text-lg italic">R:new Design Studio</span>
                            </div>
                            <p className="text-slate-400 text-[10px] font-bold tracking-[0.4em] opacity-60 italic">
                                &copy; 2026 r:new design studio. all rights reserved.
                            </p>
                        </div>
                        <div className="flex items-center gap-10">
                            {["instagram", "kakaotalk", "email"].map((link) => (
                                <a key={link} href="#" className="text-[10px] font-black text-slate-400 hover:text-blue-600 tracking-[0.3em] transition-colors italic lowercase">
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>
                </footer>
            </div>
        </main>
    );
}
