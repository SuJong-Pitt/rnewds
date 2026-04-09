"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/images/portfolio/portfolio_1.png",
  "/images/portfolio/portfolio_2.png",
  "/images/portfolio/portfolio_3.png",
  "/images/portfolio/portfolio_4.png",
  "/images/portfolio/portfolio_5.png",
  "/images/portfolio/portfolio_6.png",
  "/images/portfolio/portfolio_7.png",
];

const Column = ({ images, speed, reverse = false }: { images: string[], speed: number, reverse?: boolean }) => {
  return (
    <div className="flex flex-col gap-8 md:gap-12 relative will-change-transform">
      <motion.div
        animate={{
          y: reverse ? ["-50%", "0%"] : ["0%", "-50%"]
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear"
        }}
        className="flex flex-col gap-8 md:gap-12"
      >
        {[...images, ...images].map((src, i) => (
          <div
            key={i}
            className="w-full aspect-[2/3.5] relative rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden border border-white/20 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] group transition-all duration-700 hover:scale-[1.05] hover:border-blue-400/40 hover:shadow-[0_40px_100px_-20px_rgba(37,99,235,0.25)]"
          >
            <Image
              src={src}
              alt="Portfolio item"
              fill
              className="object-cover transform-gpu transition-transform duration-1000 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            {/* Premium Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-700" />
            
            {/* Subtle Reflection Detail */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-white/30" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export function PortfolioMockup() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full aspect-[4/5] sm:aspect-[4/3] md:aspect-[16/10] max-w-6xl mx-auto perspective-[3000px] overflow-hidden rounded-[4rem] md:rounded-[6.5rem] bg-white/40 backdrop-blur-3xl shadow-[0_60px_150px_-30px_rgba(0,0,0,0.08)] border border-white/80 transition-all duration-1000 group/mockup"
    >
      {/* Dynamic Background Floaties */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 20, 0]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/4 -left-10 w-64 h-64 bg-blue-400 blur-[100px] rounded-full mix-blend-multiply opacity-30"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
          y: [0, -30, 0]
        }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-1/4 -right-10 w-80 h-80 bg-indigo-300 blur-[120px] rounded-full mix-blend-multiply opacity-20"
      />

      {/* Texture & Premium Noise Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.08] pointer-events-none z-[15]"></div>

      {/* Sophisticated Light Sweep */}
      <motion.div
        animate={{
          x: ["-100%", "200%"],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 5
        }}
        className="absolute inset-0 z-[12] bg-gradient-to-r from-transparent via-white/50 to-transparent w-full h-full skew-x-[-30deg] pointer-events-none opacity-40"
      />

      {/* Architectural Branding Elements */}
      <div className="absolute top-12 left-12 z-20 opacity-30 pointer-events-none flex items-center gap-4">
        <div className="w-8 h-[1px] bg-slate-400"></div>
        <span className="font-mono text-[9px] tracking-[0.6em] text-slate-500 uppercase">RDS_VAULT_04A</span>
      </div>
      <div className="absolute bottom-12 right-12 z-20 opacity-30 pointer-events-none flex items-center gap-4">
        <span className="font-mono text-[9px] tracking-[0.6em] text-slate-500 uppercase">37.5665N 126.9780E</span>
        <div className="w-8 h-[1px] bg-slate-400"></div>
      </div>

      {/* Interior Depth Shadows (Inset effect) */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-900/[0.03] to-transparent z-[11] pointer-events-none"></div>
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-900/[0.03] to-transparent z-[11] pointer-events-none"></div>

      {/* Tilted Container - Enhanced with better Z-axis depth */}
      <div className="absolute inset-0 flex gap-6 md:gap-14 p-8 md:p-20 transform-gpu rotate-x-[15deg] md:rotate-x-[20deg] rotate-y-[-20deg] md:rotate-y-[-25deg] rotate-z-[8deg] md:rotate-z-[12deg] scale-[1.3] md:scale-115 translate-y-[-2%] translate-x-[2%] origin-center">
        <div className="flex-1">
          <Column images={[images[0], images[5], images[2]]} speed={50} />
        </div>
        <div className="flex-1 mt-[-25%] md:mt-[-30%]">
          <Column images={[images[3], images[1], images[6]]} speed={40} reverse />
        </div>
        <div className="flex-1 hidden sm:block mt-[10%]">
          <Column images={[images[2], images[3], images[5]]} speed={60} />
        </div>
        <div className="flex-1 hidden md:block mt-[-15%]">
          <Column images={[images[6], images[4], images[0]]} speed={70} reverse />
        </div>
      </div>

      {/* Cinematic Fade Overlays (More refined and less washing out) */}
      <div className="absolute inset-x-0 top-0 h-32 md:h-48 bg-gradient-to-b from-white via-white/40 to-transparent z-20 pointer-events-none"></div>
      <div className="absolute inset-x-0 bottom-0 h-32 md:h-48 bg-gradient-to-t from-white via-white/40 to-transparent z-20 pointer-events-none"></div>
      
      {/* Side masks for extra focus */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white/20 to-transparent z-20 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white/20 to-transparent z-20 pointer-events-none"></div>
    </motion.div>
  );
}
