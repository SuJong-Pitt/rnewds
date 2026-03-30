"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/images/portfolio/portfolio_1.png",
  "/images/portfolio/portfolio_2.png",
  "/images/portfolio/portfolio_3.png",
  "/images/portfolio/portfolio_4.png",
  "/images/portfolio/portfolio_5.png",
];

const Column = ({ images, speed, reverse = false }: { images: string[], speed: number, reverse?: boolean }) => {
  return (
    <div className="flex flex-col gap-6 relative">
      <motion.div
        animate={{
          y: reverse ? ["-50%", "0%"] : ["0%", "-50%"]
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear"
        }}
        className="flex flex-col gap-6"
      >
        {[...images, ...images].map((src, i) => (
          <div
            key={i}
            className="w-full aspect-[2/3] relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl group transition-transform duration-500 hover:scale-105"
          >
            <Image
              src={src}
              alt="Portfolio item"
              fill
              className="object-cover opacity-90 md:opacity-100"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export function PortfolioMockup() {
  return (
    <div className="relative w-full aspect-[16/10] max-w-6xl mx-auto perspective-[2000px] overflow-hidden rounded-[40px] bg-slate-100/50 backdrop-blur-sm border border-slate-200 shadow-[0_40px_100px_rgba(0,0,0,0.1)]">
      {/* Texture & Glow */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-10"></div>
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-400/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-indigo-400/20 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Tilted Container */}
      <div className="absolute inset-0 flex gap-2 md:gap-4 p-4 md:p-8 transform-gpu rotate-x-[10deg] md:rotate-x-[20deg] rotate-y-[-15deg] md:rotate-y-[-25deg] rotate-z-[5deg] md:rotate-z-[15deg] scale-110 md:scale-125 translate-y-[-5%] md:translate-y-[-10%] translate-x-[2%] md:translate-x-[5%]">
        <div className="flex-1">
          <Column images={[images[0], images[1], images[2]]} speed={45} />
        </div>
        <div className="flex-1 mt-[-10%] md:mt-[-20%]">
          <Column images={[images[3], images[4], images[0]]} speed={35} reverse />
        </div>
        <div className="flex-1 hidden md:block">
          <Column images={[images[1], images[2], images[3]]} speed={55} />
        </div>
        <div className="flex-1 mt-[-10%] hidden lg:block">
          <Column images={[images[4], images[0], images[1]]} speed={40} reverse />
        </div>
      </div>

      {/* Top & Bottom Fade Overlays */}
      <div className="absolute inset-x-0 top-0 h-20 md:h-40 bg-gradient-to-b from-slate-100/80 via-white/40 to-transparent z-20 pointer-events-none"></div>
      <div className="absolute inset-x-0 bottom-0 h-20 md:h-40 bg-gradient-to-t from-slate-100/80 via-white/40 to-transparent z-20 pointer-events-none"></div>

      {/* Re-designed Premium Branding Plate */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none w-full max-w-[280px] md:max-w-none px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative group flex flex-col items-center"
        >
          {/* Main Glass Plate - Ultra Transparent & Refined */}
          <div className="w-full md:w-auto px-4 py-4 md:px-12 md:py-8 rounded-[28px] md:rounded-[40px] bg-white/[0.03] backdrop-blur-[10px] md:backdrop-blur-[16px] border border-white/30 shadow-[0_20px_60px_rgba(0,0,0,0.08)] ring-1 ring-white/10 flex flex-col items-center gap-3 md:gap-5 overflow-hidden">
            {/* Minimalist Inner Glow */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/15 to-transparent opacity-30"></div>
            
            {/* Studio Identity */}
            <div className="relative flex flex-col items-center gap-2">
              <motion.div 
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 md:-inset-6 opacity-25"
              >
                <div className="w-full h-full border border-dashed border-blue-400/40 rounded-full"></div>
              </motion.div>

              <div className="w-8 h-8 md:w-16 md:h-16 rounded-[12px] md:rounded-[24px] bg-slate-900/90 backdrop-blur-sm flex items-center justify-center text-white shadow-lg relative z-10 box-glow overflow-hidden">
                <span className="text-sm md:text-3xl font-black italic tracking-tighter">R</span>
                {/* Logo Shine */}
                <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent"></div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-0 relative z-10">
              <span className="text-[10px] md:text-xl font-bold tracking-tight md:tracking-tighter text-slate-900 leading-none">
                R:NEW <span className="text-blue-600">STUDIO</span>
              </span>
              <div className="h-[1px] w-5 md:w-10 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30 my-1"></div>
              <span className="text-[5px] md:text-[9px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-slate-500 whitespace-nowrap opacity-70">
                Elite Strategic Design
              </span>
            </div>
          </div>

          {/* Floating Accents */}
          <motion.div
            animate={{ 
              y: [0, -8, 0],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 md:-top-12 md:-right-12 w-16 h-16 md:w-24 md:h-24 bg-blue-400/20 rounded-full blur-xl md:blur-2xl -z-10"
          ></motion.div>
          <motion.div
            animate={{ 
              y: [0, 8, 0],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 md:-bottom-12 md:-left-12 w-20 h-20 md:w-32 md:h-32 bg-indigo-400/20 rounded-full blur-xl md:blur-2xl -z-10"
          ></motion.div>
        </motion.div>
      </div>
    </div>
  );
}
