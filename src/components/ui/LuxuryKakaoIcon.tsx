"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface LuxuryKakaoIconProps {
  className?: string;
  size?: number;
  glow?: boolean;
}

export function LuxuryKakaoIcon({ className = "", size = 24, glow = true }: LuxuryKakaoIconProps) {
  return (
    <motion.div
      className={`relative flex items-center justify-center ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {glow && (
        <motion.div
          className="absolute inset-0 bg-yellow-400/20 blur-xl rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}
      <div className="relative z-10 transition-transform duration-500 overflow-hidden rounded-xl shadow-lg">
        <Image
          src="/images/icons/kakao.svg"
          alt="KakaoTalk"
          width={size}
          height={size}
          className="object-contain"
        />
      </div>
    </motion.div>
  );
}
