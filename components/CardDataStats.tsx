"use client";
import { ArrowDown, ArrowUp } from "lucide-react";
import clsx from "clsx";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent, ReactNode } from "react";

interface CardDataStatsProps {
  title: string;
  total: string;
  rate: string;
  levelUp?: boolean;
  levelDown?: boolean;
  icon: ReactNode;
}

export default function CardDataStats({
  title,
  total,
  rate,
  levelUp,
  levelDown,
  icon,
}: CardDataStatsProps) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className="group relative rounded-md border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark"
      onMouseMove={handleMouseMove}>
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-md opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(${levelUp ? "0, 255, 0" : levelDown ? "255, 0, 0" : "0, 0, 0"}, 0.1),
              transparent 80%
            )
          `,
        }}
      />
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
        {icon}
      </div>
      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">{total}</h4>
          <span className="text-sm font-medium">{title}</span>
        </div>
        <span
          className={clsx("flex items-center gap-1 text-sm font-medium", {
            "text-meta-3": levelUp,
            "text-meta-1": levelDown,
          })}>
          {rate}
          {levelUp && <ArrowUp className="fill-meta-3" size={15} />}
          {levelDown && <ArrowDown className="fill-meta-1" size={15} />}
        </span>
      </div>
    </div>
  );
}
