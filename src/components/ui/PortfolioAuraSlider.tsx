"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";

const portfolioItems = [
  {
    src: "/images/portfolio/portfolio_1.png",
    label: "Project 01",
    aura1: "#3b82f6",   // blue-500
    aura2: "#6366f1",   // indigo-500
    aura3: "#8b5cf6",   // violet-500
    tailwindGrad: "from-blue-600 via-indigo-500 to-violet-600",
    tag: "상세페이지 디자인",
    client: "AURELIA DERMA",
  },
  {
    src: "/images/portfolio/portfolio_2.png",
    label: "Project 02",
    aura1: "#f43f5e",
    aura2: "#ec4899",
    aura3: "#a855f7",
    tailwindGrad: "from-rose-500 via-pink-500 to-purple-600",
    tag: "브랜드 아이덴티티",
    client: "LUMINOUS BEAUTY",
  },
  {
    src: "/images/portfolio/portfolio_3.png",
    label: "Project 03",
    aura1: "#10b981",
    aura2: "#14b8a6",
    aura3: "#06b6d4",
    tailwindGrad: "from-emerald-500 via-teal-400 to-cyan-600",
    tag: "패키지 디자인",
    client: "NATURE REPUBLIC",
  },
  {
    src: "/images/portfolio/portfolio_4.png",
    label: "Project 04",
    aura1: "#f59e0b",
    aura2: "#f97316",
    aura3: "#ef4444",
    tailwindGrad: "from-amber-400 via-orange-500 to-red-500",
    tag: "쇼핑몰 구축",
    client: "PREMIUM GOODS",
  },
  {
    src: "/images/portfolio/portfolio_5.png",
    label: "Project 05",
    aura1: "#38bdf8",
    aura2: "#3b82f6",
    aura3: "#6366f1",
    tailwindGrad: "from-sky-400 via-blue-500 to-indigo-600",
    tag: "콘텐츠 전략",
    client: "TECH INNOVATION",
  },
  {
    src: "/images/portfolio/portfolio_6.png",
    label: "Project 06",
    aura1: "#e879f9",
    aura2: "#a855f7",
    aura3: "#ec4899",
    tailwindGrad: "from-fuchsia-500 via-purple-500 to-pink-500",
    tag: "제품 기획전",
    client: "FASHION WEEK",
  },
  {
    src: "/images/portfolio/portfolio_7.png",
    label: "Project 07",
    aura1: "#ef4444",
    aura2: "#f43f5e",
    aura3: "#f97316",
    tailwindGrad: "from-red-500 via-rose-500 to-orange-500",
    tag: "프로모션 페이지",
    client: "HOLIDAY SPECIAL",
  },
];

const SLIDE_DURATION = 5000;

export function PortfolioAuraSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback(
    (index: number, dir?: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setDirection(dir ?? (index > activeIndex ? 1 : -1));
      setActiveIndex(index);
      setTimeout(() => setIsTransitioning(false), 900);
    },
    [activeIndex, isTransitioning]
  );

  const next = useCallback(() => {
    const nextIdx = (activeIndex + 1) % portfolioItems.length;
    goTo(nextIdx, 1);
  }, [activeIndex, goTo]);

  const prev = useCallback(() => {
    const prevIdx = (activeIndex - 1 + portfolioItems.length) % portfolioItems.length;
    goTo(prevIdx, -1);
  }, [activeIndex, goTo]);

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setTimeout(next, SLIDE_DURATION);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [activeIndex, isPaused, next]);

  const current = portfolioItems[activeIndex];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "12%" : "-12%",
      opacity: 0,
      scale: 0.96,
    }),
    center: { x: "0%", opacity: 1, scale: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? "-12%" : "12%",
      opacity: 0,
      scale: 0.96,
    }),
  };

  return (
    <div
      className="relative w-full max-w-[1400px] mx-auto select-none px-2 sm:px-6 md:px-12 py-8 md:py-16"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ══════════════════════════════════════════
          TRIPLE LAYER AURA SYSTEM
      ══════════════════════════════════════════ */}

      {/* Layer 1: Far Outer Halo — slow breathing */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`halo-${activeIndex}`}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: [0, 0.55, 0.45], scale: [0.7, 1.18, 1.1] }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 1.8, ease: "easeOut", times: [0, 0.5, 1] }}
          className="absolute -inset-[8%] md:-inset-[22%] -z-30 pointer-events-none rounded-[40%]"
          style={{
            background: `radial-gradient(ellipse 80% 70% at 50% 50%, ${current.aura1}88, ${current.aura2}44, transparent 70%)`,
            filter: "blur(70px)",
          }}
        />
      </AnimatePresence>

      {/* Layer 2: Mid Corona — faster pulse */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`corona-${activeIndex}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.65, 0.5, 0.65] }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.5, ease: "easeInOut", times: [0, 0.3, 0.6, 1], repeat: Infinity, repeatType: "mirror" }}
          className="absolute -inset-[2%] md:-inset-[10%] -z-20 pointer-events-none rounded-[30%]"
          style={{
            background: `radial-gradient(ellipse 70% 60% at 50% 55%, ${current.aura2}77, ${current.aura3}33, transparent 65%)`,
            filter: "blur(45px)",
          }}
        />
      </AnimatePresence>

      {/* Layer 3: Inner Edge Glow — sharp, vivid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`edge-glow-${activeIndex}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 -z-10 pointer-events-none rounded-[24px] md:rounded-[4rem]"
          style={{
            boxShadow: `0 0 60px 20px ${current.aura1}55, 0 0 120px 40px ${current.aura2}33`,
          }}
        />
      </AnimatePresence>

      {/* ══════════════════════════════════════════
          ANIMATED CONIC GRADIENT BORDER RING
      ══════════════════════════════════════════ */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        className="absolute -inset-[3px] md:-inset-[4px] rounded-[26px] md:rounded-[4.2rem] -z-10 pointer-events-none"
        style={{
          background: `conic-gradient(from 0deg, ${current.aura1}00, ${current.aura1}cc, ${current.aura2}cc, ${current.aura3}cc, ${current.aura1}00)`,
          opacity: 0.8,
        }}
      />

      {/* ══════════════════════════════════════════
          MAIN SLIDER FRAME
      ══════════════════════════════════════════ */}
      <div
        className="relative overflow-hidden rounded-[24px] md:rounded-[4rem] bg-slate-950 z-10"
        style={{
          boxShadow: `0 40px 120px -20px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.08) inset`,
        }}
      >
        {/* Cinematic Letterbox Transition Effect */}
        <AnimatePresence>
          {isTransitioning && (
            <>
              <motion.div
                initial={{ scaleY: 0, originY: 0 }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 0, originY: 0 }}
                transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
                className="absolute inset-x-0 top-0 h-[12%] bg-slate-950 z-50 pointer-events-none"
              />
              <motion.div
                initial={{ scaleY: 0, originY: "100%" }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 0, originY: "100%" }}
                transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
                className="absolute inset-x-0 bottom-0 h-[12%] bg-slate-950 z-50 pointer-events-none"
              />
            </>
          )}
        </AnimatePresence>

        {/* Animated Slide */}
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={`slide-${activeIndex}`}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.75, ease: [0.25, 1, 0.5, 1] }}
            className="relative w-full aspect-[3/4] sm:aspect-[4/3] md:aspect-[16/9] overflow-hidden"
          >
            {/* Ken Burns Parallax Zoom */}
            <motion.div
              key={`zoom-${activeIndex}`}
              initial={{ scale: 1.12 }}
              animate={{ scale: 1.0 }}
              transition={{ duration: 7, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src={current.src}
                alt={current.label}
                fill
                sizes="(max-width: 768px) 100vw, 90vw"
                className="object-cover"
                priority
              />
            </motion.div>

            {/* Deep Cinematic Vignette */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `
                  linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, transparent 30%, transparent 55%, rgba(0,0,0,0.85) 100%),
                  radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.25) 100%)
                `,
              }}
            />

            {/* Animated Inner Color Wash (Slides aura tone over the image bottom) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`wash-${activeIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `linear-gradient(to top, ${current.aura1}66 0%, transparent 40%)`,
                }}
              />
            </AnimatePresence>

            {/* Glossy Reflection Sweep */}
            <motion.div
              key={`sweep-${activeIndex}`}
              initial={{ x: "-180%", opacity: 0.6 }}
              animate={{ x: "220%", opacity: 0 }}
              transition={{ duration: 2.2, ease: "easeOut", delay: 0.3 }}
              className="absolute inset-0 z-20 pointer-events-none"
              style={{ background: "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.18) 50%, transparent 65%)" }}
            />

            {/* ── TOP RIGHT: Glass Counter Widget ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.5, type: "spring", bounce: 0.4 }}
              className="absolute top-4 right-4 md:top-8 md:right-8 z-30"
            >
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-full"
                style={{
                  background: "rgba(0,0,0,0.35)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  boxShadow: `0 0 16px 2px ${current.aura1}44`,
                }}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ background: current.aura1, boxShadow: `0 0 6px 2px ${current.aura1}` }}
                />
                <span className="font-mono text-[10px] md:text-xs font-bold tracking-[0.25em] text-white">
                  {String(activeIndex + 1).padStart(2, "0")}
                  <span className="text-white/30 mx-1">/</span>
                  <span className="text-white/40">{String(portfolioItems.length).padStart(2, "0")}</span>
                </span>
              </div>
            </motion.div>

            {/* ── BOTTOM LEFT: Tag + Title ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-6 left-5 md:bottom-14 md:left-14 z-30"
            >
              {/* Tag Badge with sparkle dot */}
              <div className="flex items-center gap-2 mb-3">
                <div
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase text-white"
                  style={{
                    background: "rgba(0,0,0,0.45)",
                    backdropFilter: "blur(12px)",
                    border: `1px solid ${current.aura1}55`,
                    boxShadow: `0 0 12px 0px ${current.aura1}55`,
                  }}
                >
                  <motion.span
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.6, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="inline-block w-1.5 h-1.5 rounded-full"
                    style={{ background: current.aura1, boxShadow: `0 0 6px 2px ${current.aura1}` }}
                  />
                  {current.tag}
                </div>
              </div>

              {/* Shimmer Title */}
              <h3
                className="text-white font-heading font-black tracking-tighter leading-none text-3xl md:text-5xl lg:text-6xl"
                style={{
                  textShadow: `0 2px 30px ${current.aura1}88, 0 0 80px ${current.aura2}44`,
                }}
              >
                {current.client}
              </h3>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Top Edge Light Line */}
        <motion.div
          key={`topline-${activeIndex}`}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-0 inset-x-0 h-[1.5px] z-30 origin-left pointer-events-none"
          style={{
            background: `linear-gradient(to right, transparent, ${current.aura1}cc, ${current.aura2}cc, transparent)`,
          }}
        />

        {/* Desktop Side Arrows (hidden on mobile) */}
        <div className="hidden md:flex absolute inset-0 items-center justify-between z-40 pointer-events-none px-8">
          <DesktopArrow direction="left" onClick={prev} aura={current.aura1} />
          <DesktopArrow direction="right" onClick={next} aura={current.aura1} />
        </div>
      </div>

      {/* ══════════════════════════════════════════
          BOTTOM CONTROLS
      ══════════════════════════════════════════ */}
      <div className="mt-6 md:mt-10 flex items-center justify-center gap-4 md:gap-6 relative z-10">
        {/* Mobile Prev Arrow */}
        <button
          onClick={prev}
          className="md:hidden flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border border-slate-200 bg-white/80 backdrop-blur-md shadow-sm active:scale-90 transition-transform text-slate-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="rotate-180"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </button>

        {/* Progress Trackbars */}
        <div className="flex items-center gap-1.5 md:gap-2">
          {portfolioItems.map((item, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`relative h-[5px] rounded-full overflow-hidden transition-all duration-500 ease-out ${
                i === activeIndex ? "w-10 md:w-14" : "w-4 md:w-5"
              }`}
              style={{ background: i < activeIndex ? `${item.aura1}55` : "rgba(203,213,225,0.5)" }}
            >
              {i === activeIndex && (
                <motion.div
                  className="absolute inset-0 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                  style={{
                    background: `linear-gradient(to right, ${current.aura1}, ${current.aura2})`,
                    boxShadow: `0 0 8px 2px ${current.aura1}99`,
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Mobile Next Arrow */}
        <button
          onClick={next}
          className="md:hidden flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border border-slate-200 bg-white shadow-md active:scale-90 transition-transform text-slate-800"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </button>
      </div>
    </div>
  );
}

function DesktopArrow({ direction, onClick, aura }: { direction: "left" | "right"; onClick: () => void; aura: string }) {
  const isLeft = direction === "left";
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.93 }}
      className="pointer-events-auto w-14 h-14 rounded-full flex items-center justify-center relative group"
      style={{
        background: "rgba(255,255,255,0.12)",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(255,255,255,0.2)",
        boxShadow: `0 8px 32px rgba(0,0,0,0.25)`,
      }}
      aria-label={isLeft ? "Previous" : "Next"}
    >
      <motion.div
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ background: `${aura}33` }}
      />
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        className={`relative z-10 transition-transform duration-300 ${isLeft ? "rotate-180 group-hover:-translate-x-0.5" : "group-hover:translate-x-0.5"}`}>
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </motion.button>
  );
}
