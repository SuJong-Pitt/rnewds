"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/#projects" },
    { name: "Skills", href: "/#skills" },
    { name: "Contact", href: "/#contact" },
];

export function Navbar() {
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
                        className="text-xl font-bold tracking-tight flex items-center gap-2"
                    >
                        <div className="w-9 h-9 bg-slate-900 group-hover:bg-blue-600 transition-colors rounded-xl flex items-center justify-center text-white text-[12px] font-black shadow-lg shadow-slate-900/10">R</div>
                        <span className="text-slate-900 hidden sm:block">R:new <span className="text-slate-400 font-medium">Design Studio</span></span>
                        <span className="text-slate-900 sm:hidden">R:new</span>
                    </motion.div>
                </Link>

                {/* Central Links (Desktop) */}
                <div className="hidden md:flex gap-1 bg-slate-100/50 p-1 rounded-2xl border border-slate-200/50 backdrop-blur-sm">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-all px-4 py-2 rounded-xl hover:bg-white hover:shadow-sm"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Right Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <Button variant="default" className="rounded-xl px-6 font-bold btn-gradient h-10 border-none shadow-md">
                        문의하기
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden z-50 p-2 text-slate-900"
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
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="flex flex-col w-full px-12 gap-4 mt-4"
                            >
                                <Button size="lg" className="w-full rounded-2xl py-6 font-bold btn-gradient border-none h-auto">
                                    시작하기
                                </Button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
