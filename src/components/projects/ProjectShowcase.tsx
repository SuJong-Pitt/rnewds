"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { Loader2, Sparkles, ArrowUpRight, ShieldCheck, Box } from "lucide-react";
import { useRouter } from "next/navigation";

export function ProjectShowcase() {
    const [projects, setProjects] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const sectionRef = useRef<HTMLDivElement>(null);

    // Magnetic Mouse Tracking
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    
    const springConfig = { damping: 25, stiffness: 150 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!sectionRef.current) return;
            const { left, top } = sectionRef.current.getBoundingClientRect();
            mouseX.set(e.clientX - left);
            mouseY.set(e.clientY - top);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await fetch("/api/projects");
                const data = await res.json();
                if (Array.isArray(data)) {
                    setProjects(data);
                }
            } catch (error) {
                console.error("Fetch projects error:", error);
            }
            setLoading(false);
        };

        fetchProjects();
    }, []);

    // Letter Animation Variants
    const letterVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.8, filter: "blur(4px)" },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                delay: i * 0.04,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }
        })
    };

    const AnimatedText = ({ text, className, delay = 0 }: { text: string; className: string; delay?: number }) => (
        <>
            {text.split("").map((char, i) => (
                <motion.span
                    key={i}
                    custom={i + delay}
                    variants={letterVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className={`inline-block whitespace-pre ${className}`}
                >
                    {char}
                </motion.span>
            ))}
        </>
    );

    return (
        <section 
            id="projects" 
            ref={sectionRef}
            className="py-32 md:py-64 px-6 bg-slate-50 overflow-hidden relative antialiased"
        >
            {/* 1. Atmospheric Branding Layer (Watermark & Grid) */}
            <div className="absolute inset-x-0 -top-20 -bottom-20 z-0 opacity-[0.03] select-none pointer-events-none flex items-center justify-center">
                <span className="text-[20vw] font-black text-slate-900 tracking-tighter leading-none italic uppercase">PORTFOLIO</span>
            </div>

            {/* Magnetic Mouse Glow - Premium Spatial Depth */}
            <motion.div 
                style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
                className="absolute w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 via-indigo-500/5 to-transparent blur-[120px] rounded-full pointer-events-none z-0"
            />
            
            {/* Multi-Color Atmospheric Blobs */}
            <motion.div
                animate={{ x: [0, 80, 0], y: [0, 60, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 -left-20 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"
            />
            <motion.div
                animate={{ x: [0, -80, 0], y: [0, 80, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-0 -right-20 w-[700px] h-[700px] bg-indigo-600/5 blur-[140px] rounded-full pointer-events-none"
            />

            {/* Architectural Grid Texturing */}
            <div className="absolute inset-0 opacity-[0.05] select-none pointer-events-none antialiased"
                style={{ backgroundImage: 'linear-gradient(#2563eb 0.5px, transparent 0.5px), linear-gradient(90deg, #2563eb 0.5px, transparent 0.5px)', backgroundSize: '120px 120px' }}></div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 md:mb-40 gap-12">
                    <div className="max-w-3xl space-y-12">
                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/50 backdrop-blur-xl border border-blue-100/50 text-blue-600 shadow-[0_10px_30px_rgba(37,99,235,0.05)]"
                            >
                                <div className="relative">
                                    <Sparkles size={16} className="text-blue-500" />
                                    <motion.div 
                                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="absolute inset-0 bg-blue-400 rounded-full blur-sm"
                                    />
                                </div>
                                <span className="font-bold text-[11px] md:text-xs uppercase tracking-[0.5em] pl-1">Case Study Hub</span>
                            </motion.div>

                            <h2 className="text-3xl md:text-5xl lg:text-[3.6rem] font-heading font-black text-slate-950 tracking-[-0.05em] leading-[1.05] antialiased">
                                <div className="block mb-3">
                                    <AnimatedText 
                                        text="최상의 결과물로" 
                                        className="text-transparent bg-clip-text bg-gradient-to-br from-slate-950 via-slate-800 to-slate-950" 
                                    />
                                </div>
                                <span className="relative inline-block italic">
                                    <AnimatedText 
                                        text="가치를 증명" 
                                        className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-700 bg-[length:200%_auto] animate-gradient-x"
                                        delay={8}
                                    />
                                    {/* Sophisticated Architectural Underglow */}
                                    <motion.div 
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "100%" }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 1.2, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                                        className="absolute -bottom-3 left-0 h-[10px] bg-blue-500/15 blur-[4px] rounded-full"
                                    />
                                    <motion.div 
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "100%" }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 1.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                        className="absolute -bottom-3 left-0 h-[4px] bg-gradient-to-r from-blue-400 via-indigo-400 to-transparent rounded-full"
                                    />
                                </span>
                                <AnimatedText text="합니다." className="ml-2" delay={18} />
                            </h2>
                        </div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 1 }}
                        className="text-slate-500 max-w-sm text-lg md:text-xl font-light leading-relaxed tracking-tight break-keep border-l-4 border-blue-500/20 pl-10 mb-6 relative group"
                    >
                        <div className="absolute -left-1 top-0 bottom-0 w-1 bg-blue-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-top"></div>
                        단순한 포트폴리오를 넘어 <span className="text-slate-900 font-medium">비즈니스 성장을 견인</span>한 <br className="hidden md:block" />
                        R:new Design Studio의 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 font-bold italic">마스터피스</span>입니다.
                    </motion.div>
                </div>

                {loading ? (
                    <div className="flex justify-center py-40">
                        <div className="relative">
                            <div className="w-16 h-16 border-4 border-blue-100 rounded-full"></div>
                            <div className="absolute top-0 left-0 w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
                        <AnimatePresence>
                            {projects.length > 0 ? (
                                projects.map((project, index) => (
                                    <motion.div
                                        key={project.id}
                                        initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                        transition={{ duration: 1, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                                        viewport={{ once: true }}
                                        onClick={() => router.push(`/projects/${project.id}`)}
                                        className="group cursor-none"
                                    >
                                        <div className="relative aspect-square md:aspect-[3/4] overflow-hidden rounded-[50px] bg-slate-100 border border-slate-200/50 transition-all duration-1000 group-hover:border-blue-300 shadow-[0_20px_50px_rgba(0,0,0,0.02)] group-hover:shadow-[0_40px_120px_rgba(37,99,235,0.2)]">
                                            <img
                                                src={project.image_url}
                                                alt={project.title}
                                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-2"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-95 transition-opacity duration-700"></div>

                                            <div className="absolute bottom-12 left-12 right-12 z-10 transform group-hover:-translate-y-2 transition-transform duration-700">
                                                <div className="flex items-center justify-between mb-8">
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(37,99,235,1)]"></div>
                                                        <span className="text-[11px] font-black text-blue-400 tracking-[0.5em] uppercase">
                                                            Premium Archive
                                                        </span>
                                                    </div>
                                                    <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-700 group-hover:rotate-45 group-hover:scale-125 shadow-xl">
                                                        <ArrowUpRight className="text-white -rotate-45 group-hover:rotate-0 transition-transform duration-700" size={28} />
                                                    </div>
                                                </div>
                                                <h3 className="text-4xl font-black text-white mb-4 tracking-tighter leading-tight">
                                                    {project.title}
                                                </h3>
                                                <p className="text-lg text-slate-300 line-clamp-2 leading-relaxed font-light tracking-tight opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-100 break-keep">
                                                    {project.description}
                                                </p>
                                            </div>
                                            
                                            {/* Spectral Border Shine on Hover */}
                                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1500 ease-in-out"></div>
                                        </div>
                                    </motion.div>
                                ))
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="col-span-full p-20 md:p-40 rounded-[80px] md:rounded-[100px] border border-slate-200/50 bg-white/40 backdrop-blur-3xl flex flex-col items-center justify-center text-center relative overflow-hidden shadow-[0_60px_150px_rgba(0,0,0,0.04)] group"
                                >
                                    {/* Glassmorphic "Masterpiece Vault" */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.02] via-transparent to-indigo-500/[0.02]"></div>
                                    
                                    {/* 3. The Digital Scanning Laser (WOW Factor) */}
                                    <motion.div 
                                        animate={{ x: ["-100%", "200%"] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent skew-x-12 pointer-events-none"
                                    />
                                    
                                    {/* Architectural Markers */}
                                    <div className="absolute top-12 left-1/2 -translate-x-1/2 flex items-center gap-8 opacity-20 pointer-events-none select-none">
                                        <span className="text-[10px] font-mono tracking-[1em] uppercase">GALLERY_01</span>
                                        <div className="w-20 h-px bg-slate-900"></div>
                                        <span className="text-[10px] font-mono tracking-[1em] uppercase">ARCHITECTURE_VAULT</span>
                                    </div>
                                    
                                    <div className="relative mb-16">
                                        {/* Floating Geometric Elements */}
                                        <motion.div 
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                            className="absolute -inset-12 border border-blue-500/10 rounded-[60px]"
                                        />
                                        <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-[60px] animate-pulse scale-150"></div>
                                        <div className="relative w-32 h-32 md:w-48 md:h-48 bg-slate-950 rounded-[50px] flex items-center justify-center shadow-[0_40px_80px_rgba(0,0,0,0.5)] ring-1 ring-white/20 transform group-hover:scale-105 transition-transform duration-1000">
                                            <Box className="text-blue-500 w-16 h-16 md:w-24 md:h-24 animate-pulse" strokeWidth={1} />
                                            <div className="absolute -top-4 -right-4 w-12 h-12 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/20">
                                                <ShieldCheck className="text-blue-400 w-6 h-6" />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <h3 className="text-4xl md:text-7xl font-black mb-10 text-slate-950 tracking-tighter leading-tight relative">
                                        Project Vault <br />
                                        <span className="text-[0.4em] font-mono font-medium tracking-[0.8em] text-blue-600 block mt-4 opacity-100 italic">IN PROGRESS</span>
                                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-blue-600 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.5)]"></div>
                                    </h3>
                                    
                                    <p className="text-slate-500 max-w-2xl mx-auto text-xl md:text-3xl font-light leading-relaxed tracking-tight break-keep pt-6 opacity-80">
                                        현재 R:new Studio 만의 <span className="text-slate-950 font-medium">독창적인 마스터피스</span>들을 <br className="hidden md:block" />
                                        정밀하게 보관 및 준비하고 있습니다. 곧 압도적인 결과물로 찾아뵙겠습니다.
                                    </p>
                                    
                                    {/* Geometric Finishing */}
                                    <div className="absolute bottom-12 left-12 w-32 h-[1px] bg-slate-200"></div>
                                    <div className="absolute bottom-12 right-12 w-32 h-[1px] bg-slate-200"></div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )}
            </div>
            
            {/* Fine Noise Texture Overlay - Global Studio Feel */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>
        </section>
    );
}
