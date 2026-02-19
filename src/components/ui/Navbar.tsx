"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "py-4 bg-[#030014]/80 backdrop-blur-md border-b border-white/10" : "py-8 bg-transparent"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo with 3D Embossing Effect */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-2xl font-black tracking-tighter"
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-gray-400 to-gray-700 drop-shadow-lg">
                        R:new
                    </span>
                    <span className="text-primary ml-1 neon-text">Design Studio</span>
                </motion.div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-10 items-center">
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="text-sm font-medium text-gray-400 hover:text-white transition-colors tracking-widest uppercase"
                        >
                            {link.name}
                        </motion.a>
                    ))}
                    <motion.button
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        onClick={() => window.location.href = "/admin/login"}
                        className="px-5 py-2 glass-morphism rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all"
                    >
                        Admin
                    </motion.button>
                </div>
            </div>
        </nav>
    );
}
