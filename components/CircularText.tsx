"use client";

import { motion } from "motion/react";

export default function CircularText() {
  const text = "RODRIGO VERA • RODRIGO VERA • ";
  
  return (
    <div className="fixed top-4 left-4 lg:top-10 lg:left-10 z-50 w-32 h-32 lg:w-40 lg:h-40">
      <motion.div
        className="relative w-full h-full"
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <path
              id="circlePath"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
          </defs>
          <text className="text-[20px] font-medium fill-current tracking-wider">
            <textPath href="#circlePath" startOffset="0%">
              {text}
            </textPath>
          </text>
        </svg>
        
        {/* Círculo central opcional */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-current"></div>
        </div>
      </motion.div>
    </div>
  );
}
