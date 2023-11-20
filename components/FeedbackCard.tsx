"use client";
import { Leaf } from "lucide-react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import { useTheme } from "next-themes";

interface FeedbackCardProps {
  deviceName: string;
  energyUsage: string;
  suggestion: string;
  severity?: "low" | "medium" | "high";
}

export default function FeedbackCard({
  deviceName,
  energyUsage,
  suggestion,
  severity,
}: FeedbackCardProps) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);
  let theme = useTheme();

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className="group relative flex gap-5 rounded-md bg-meta-2 dark:bg-meta-4 px-4 py-5.5 border border-stroke dark:border-strokedark hover:border-slate-500 dark:hover:border-zinc-600 transition duration-300 cursor-pointer select-none"
      onMouseMove={handleMouseMove}>
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-md opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(
                        circle at ${mouseX}px ${mouseY}px,
                        ${
                          theme.theme === "dark"
                            ? "rgba(255, 255, 255, 0.1)"
                            : "rgba(120, 120, 120, 0.1)"
                        } 0%,
                        transparent 80%
                    )`,
        }}
      />
      <div className="flex items-center gap-2">
        <Leaf
          size={20}
          className={
            severity === "low"
              ? "text-meta-3"
              : severity === "medium"
              ? "text-meta-6"
              : "text-meta-1"
          }
        />
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <h4 className="text-base font-semibold text-black dark:text-white">{deviceName}</h4>
          <span className="text-sm font-medium">|</span>
          <span className="text-sm font-medium">{energyUsage}</span>
        </div>
        <span className="text-sm font-medium">{suggestion}</span>
      </div>
    </div>
  );
}
