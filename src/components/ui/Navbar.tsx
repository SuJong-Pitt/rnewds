"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Skills", href: "/#skills" },
    { name: "Contact", href: "/#contact" },
];

export function Navbar({ variant = "default" }: { variant?: "default" | "dark" }) {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || isMenuOpen ? "py-4 bg-white/70 backdrop-blur-xl border-b border-slate-200/50" : "py-6 bg-transparent"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center max-w-7xl">
                {/* Logo */}
                <Link href="/" className="z-50 group">
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-xl font-bold tracking-tight flex items-center gap-3"
                    >
                        <Image src="/images/icons/logo.svg" alt="R:new Logo" width={38} height={38} className="rounded-xl shadow-xl shadow-slate-950/10 group-hover:scale-105 transition-transform duration-500" priority />
                        <span className={`hidden sm:block font-heading font-black tracking-tighter text-2xl italic transition-colors ${scrolled || isMenuOpen || variant === "default" ? "text-slate-950" : "text-white"}`}>R:new <span className={`${scrolled || isMenuOpen || variant === "default" ? "text-slate-400" : "text-slate-300"} font-medium tracking-normal not-italic ml-1`}>Design Studio</span></span>
                        <span className={`sm:hidden font-heading font-black tracking-tighter text-2xl italic transition-colors ${scrolled || isMenuOpen || variant === "default" ? "text-slate-950" : "text-white"}`}>R:new</span>
                    </motion.div>
                </Link>

                {/* Central Links (Desktop) */}
                <div className="hidden md:flex gap-1 bg-slate-100/50 p-1 rounded-2xl border border-slate-200/50 backdrop-blur-sm">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium transition-all px-4 py-2 rounded-xl hover:bg-white hover:text-slate-900 hover:shadow-sm ${scrolled || isMenuOpen || variant === "default" ? "text-slate-500" : "text-slate-200"}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>


                {/* Mobile Menu Button */}
                <button
                    className={`md:hidden z-50 p-2 transition-colors ${scrolled || isMenuOpen || variant === "default" ? "text-slate-900" : "text-white"}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Navigation Overlay */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="fixed inset-x-0 top-0 h-[80vh] bg-white border-b border-slate-200 z-40 flex flex-col items-center justify-center gap-8 shadow-2xl rounded-b-3xl"
                        >
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="text-3xl font-bold text-slate-900 hover:text-blue-600 transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}

                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
