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
    <div className="flex flex-col gap-6 relative will-change-transform">
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
            className="w-full aspect-[2/3] relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group transition-all duration-500 hover:scale-[1.03] hover:border-blue-500/30"
          >
            <Image
              src={src}
              alt="Portfolio item"
              fill
              className="object-cover transform-gpu"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export function PortfolioMockup() {
  return (
    <div className="relative w-full aspect-[3/4] sm:aspect-[1/1] md:aspect-[16/10] max-w-6xl mx-auto perspective-[2000px] overflow-hidden rounded-[3.5rem] md:rounded-[5rem] bg-white shadow-[0_40px_120px_-20px_rgba(37,99,235,0.12)] border border-white/60 transition-all duration-1000 group/mockup">
      {/* Texture & Premium Noise Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.06] pointer-events-none z-[15]"></div>

      {/* Light Sweep Animation */}
      <motion.div
        animate={{
          x: ["-100%", "200%"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 3
        }}
        className="absolute inset-0 z-[12] bg-gradient-to-r from-transparent via-white/40 to-transparent w-full h-full skew-x-[-25deg] pointer-events-none"
      />

      {/* Modern Gradient Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/10 to-indigo-500/5 blur-[120px] pointer-events-none -translate-x-[20%] -translate-y-[20%]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/10 to-blue-500/5 blur-[120px] pointer-events-none translate-x-[20%] translate-y-[20%]" />

      {/* Architectural Corner Markers (Tech Aesthetic) */}
      <div className="absolute top-10 left-10 z-20 opacity-20 pointer-events-none font-mono text-[8px] tracking-[0.4em] text-slate-400">
        ARCH_VAULT / 0.1A
      </div>
      <div className="absolute top-10 right-10 z-20 opacity-20 pointer-events-none font-mono text-[8px] tracking-[0.4em] text-slate-400">
        37.5665N 126.9780E
      </div>
      <div className="absolute bottom-10 left-10 z-20 opacity-20 pointer-events-none font-mono text-[8px] tracking-[0.4em] text-slate-400 flex items-center gap-2">
        <div className="w-10 h-px bg-slate-400"></div>
        RNEW_ARCHIVE
      </div>

      {/* Glass Inner Frame (Sophistication) */}
      <div className="absolute inset-4 rounded-[3.2rem] md:rounded-[4.5rem] border border-blue-500/5 pointer-events-none z-[11]"></div>

      {/* Tilted Container - Optimized for smooth hardware-accelerated scrolling */}
      <div className="absolute inset-0 flex gap-4 md:gap-8 p-6 md:p-14 transform-gpu rotate-x-[12deg] md:rotate-x-[15deg] rotate-y-[-15deg] md:rotate-y-[-20deg] rotate-z-[5deg] md:rotate-z-[10deg] scale-125 md:scale-110 translate-y-[-5%] translate-x-[2%] origin-center">
        <div className="flex-1">
          <Column images={[images[0], images[5], images[2]]} speed={45} />
        </div>
        <div className="flex-1 mt-[-15%] md:mt-[-20%]">
          <Column images={[images[3], images[1], images[6]]} speed={35} reverse />
        </div>
        <div className="flex-1 hidden sm:block mt-[5%]">
          <Column images={[images[2], images[3], images[5]]} speed={55} />
        </div>
        <div className="flex-1 hidden md:block">
          <Column images={[images[6], images[4], images[0]]} speed={65} reverse />
        </div>
        <div className="flex-1 mt-[-10%] hidden lg:block">
          <Column images={[images[1], images[0], images[4]]} speed={40} />
        </div>
      </div>

      {/* Premium Fade Overlays (Consistent and deeper) */}
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white via-white/80 to-transparent z-20 pointer-events-none"></div>
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white via-white/80 to-transparent z-20 pointer-events-none"></div>
    </div>
  );
}
