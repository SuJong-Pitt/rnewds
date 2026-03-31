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
    <div className="relative w-full aspect-[3/4] sm:aspect-[1/1] md:aspect-[16/10] max-w-6xl mx-auto perspective-[2000px] overflow-hidden rounded-[32px] md:rounded-[40px] bg-slate-50/50 backdrop-blur-sm border border-slate-200 shadow-[0_30px_70px_-20px_rgba(37,99,235,0.15),0_40px_100px_-20px_rgba(0,0,0,0.1)] transition-all duration-700">
      {/* Texture & Enhanced Glow */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] pointer-events-none z-10"></div>
      
      {/* Dynamic Animated Glows */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-400/30 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-indigo-400/30 rounded-full blur-[120px] pointer-events-none"
      />

      {/* Floating Sparkles/Particles */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-blue-500 rounded-full blur-[1px] animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-indigo-400 rounded-full blur-[2px] animate-bounce delay-700"></div>
      </div>

      {/* Tilted Container - More aggressive scale on mobile */}
      <div className="absolute inset-0 flex gap-3 md:gap-5 p-4 md:p-8 transform-gpu rotate-x-[15deg] md:rotate-x-[20deg] rotate-y-[-18deg] md:rotate-y-[-25deg] rotate-z-[8deg] md:rotate-z-[15deg] scale-[1.35] sm:scale-125 md:scale-125 translate-y-[-5%] md:translate-y-[-10%] translate-x-[4%] md:translate-x-[5%] origin-center">
        <div className="flex-1">
          <Column images={[images[0], images[1], images[2]]} speed={40} />
        </div>
        <div className="flex-1 mt-[-15%] md:mt-[-20%]">
          <Column images={[images[3], images[4], images[1]]} speed={30} reverse />
        </div>
        <div className="flex-1 hidden sm:block mt-[5%]">
          <Column images={[images[2], images[3], images[4]]} speed={50} />
        </div>
        <div className="flex-1 hidden md:block">
          <Column images={[images[1], images[2], images[0]]} speed={60} reverse />
        </div>
        <div className="flex-1 mt-[-10%] hidden lg:block">
          <Column images={[images[4], images[0], images[1]]} speed={35} />
        </div>
      </div>

      {/* Premium Fade Overlays */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 z-20 pointer-events-none"></div>
      <div className="absolute inset-x-0 top-0 h-32 md:h-48 bg-gradient-to-b from-slate-50 via-slate-50/60 to-transparent z-20 pointer-events-none"></div>
      <div className="absolute inset-x-0 bottom-0 h-32 md:h-48 bg-gradient-to-t from-slate-50 via-slate-50/60 to-transparent z-20 pointer-events-none"></div>


    </div>
  );
}
