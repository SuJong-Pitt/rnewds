"use client";

import { motion } from "framer-motion";

interface LuxuryKakaoIconProps {
  size?: number;
  className?: string;
  glow?: boolean;
}

export const LuxuryKakaoIcon = ({ size = 64, className = "", glow = true }: LuxuryKakaoIconProps) => {
  return (
    <motion.div
      className={`relative flex items-center justify-center ${className}`}
      whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {glow && (
        <motion.div
          className="absolute inset-0 bg-[#f7d900] blur-[30px] rounded-full opacity-40 shadow-[0_0_50px_#f7d900]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}
      <svg
        width={size}
        height={size}
        viewBox="4 4 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 drop-shadow-[0_8px_16px_rgba(0,0,0,0.1)]"
      >
        <path
          fill="#f7d900"
          fillRule="evenodd"
          d="m60,12c0-4.42-3.58-8-8-8H12C7.58,4,4,7.58,4,12v40c0,4.42,3.58,8,8,8h40c4.42,0,8-3.58,8-8V12h0Z"
        />
        <path
          fill="#301818"
          fillRule="evenodd"
          d="m19.84,45.28c-6.51-3.18-10.84-8.84-10.84-15.28,0-9.94,10.31-18,23-18s23,8.06,23,18-10.31,18-23,18c-1.45,0-2.88-.11-4.25-.31l-9.01,6.13c-.26.18-.61.17-.87-.01-.26-.19-.37-.52-.28-.82l2.25-7.71h0Zm5.33-11.48h3.67l.46,1.17c.26.67,1.01,1,1.68.74.67-.26,1-1.02.74-1.68l-3.5-9c-.19-.5-.67-.83-1.21-.83s-1.02.33-1.21.83l-3.5,9c-.26.67.07,1.42.74,1.68.67.26,1.42-.07,1.68-.74l.46-1.17h0Zm17.63-2.58l3.17,4.08c.44.57,1.26.67,1.83.23.57-.44.67-1.26.23-1.82l-2.88-3.7,2.88-3.7c.44-.57.34-1.38-.23-1.82-.57-.44-1.38-.34-1.83.23l-3.17,4.08v-3.28c0-.72-.58-1.3-1.3-1.3s-1.3.58-1.3,1.3v9c0,.72.58,1.3,1.3,1.3s1.3-.58,1.3-1.3v-3.28h0Zm-9.6-5.72v9c0,.72.58,1.3,1.3,1.3h3.5c.72,0,1.3-.58,1.3-1.3s-.58-1.3-1.3-1.3h-2.2v-7.7c0-.72-.58-1.3-1.3-1.3s-1.3.58-1.3,1.3h0Zm-15,1.3v7.7c0,.72.58,1.3,1.3,1.3s1.3-.58,1.3-1.3v-7.7h2.2c.72,0,1.3-.58,1.3-1.3s-.58-1.3-1.3-1.3h-7c-.72,0-1.3.58-1.3,1.3s.58,1.3,1.3,1.3h2.2Zm7.98,4.4h1.64l-.82-2.11-.82,2.11h0Z"
        />
      </svg>
    </motion.div>
  );
};
