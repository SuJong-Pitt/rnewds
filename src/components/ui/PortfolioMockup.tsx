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
    <div className="relative w-full aspect-[3/4] sm:aspect-[1/1] md:aspect-[16/10] max-w-6xl mx-auto perspective-[2000px] overflow-hidden rounded-[3rem] md:rounded-[4rem] bg-white shadow-[0_30px_100px_-20px_rgba(37,99,235,0.1)] border border-slate-100 transition-all duration-1000">
      {/* Texture & Reduced Noise Intensity */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none z-10"></div>

      {/* Optimized Static Glows (High performance alternative to animated blurs) */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] pointer-events-none opacity-60" />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-[120px] pointer-events-none opacity-40" />

      {/* Tilted Container - Optimized for smooth hardware-accelerated scrolling */}
      <div className="absolute inset-0 flex gap-4 md:gap-8 p-6 md:p-12 transform-gpu rotate-x-[12deg] md:rotate-x-[15deg] rotate-y-[-15deg] md:rotate-y-[-20deg] rotate-z-[5deg] md:rotate-z-[10deg] scale-125 md:scale-110 translate-y-[-5%] translate-x-[2%] origin-center">
        <div className="flex-1">
          <Column images={[images[0], images[5], images[2]]} speed={50} />
        </div>
        <div className="flex-1 mt-[-15%] md:mt-[-20%]">
          <Column images={[images[3], images[6], images[1]]} speed={40} reverse />
        </div>
        <div className="flex-1 hidden sm:block mt-[5%]">
          <Column images={[images[2], images[3], images[5]]} speed={60} />
        </div>
        <div className="flex-1 hidden md:block">
          <Column images={[images[6], images[4], images[0]]} speed={70} reverse />
        </div>
        <div className="flex-1 mt-[-10%] hidden lg:block">
          <Column images={[images[1], images[0], images[4]]} speed={45} />
        </div>
      </div>

      {/* Fade Overlays */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white via-white/80 to-transparent z-20 pointer-events-none"></div>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent z-20 pointer-events-none"></div>
    </div>
  );
}
