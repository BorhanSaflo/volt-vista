"use client";
import { ArrowDown, ArrowUp } from "lucide-react";
import clsx from "clsx";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

const CardContent = ({ title, value, rate, levelUp, icon }: CardStats) => {
  return (
    <>
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
        {icon}
      </div>
      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">{value}</h4>
          <span className="text-sm font-medium">{title}</span>
        </div>
        {rate && (
          <span
            className={clsx("flex items-center gap-1 text-sm font-medium", {
              "text-meta-3": levelUp,
              "text-meta-1": !levelUp,
            })}>
            {rate}
            {levelUp ? (
              <ArrowUp className="fill-meta-3" size={15} />
            ) : (
              <ArrowDown className="fill-meta-1" size={15} />
            )}
          </span>
        )}
      </div>
    </>
  );
};

const HoverSpotlightWrapper = ({
  children,
  levelUp,
}: {
  children: React.ReactNode;
  levelUp?: boolean;
}) => {
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
              ${
                levelUp !== undefined
                  ? levelUp
                    ? "rgba(0, 255, 0, 0.2)"
                    : "rgba(255, 0, 0, 0.2)"
                  : "rgba(255, 255, 255, 0.2)"
              } 0%, 
              transparent 80%
            )
      `,
        }}
      />
      {children}
    </div>
  );
};

export default function CardDataStats({
  title,
  value,
  rate,
  levelUp,
  icon,
  hoverSpotlight = true,
}: CardStats) {
  if (hoverSpotlight) {
    return (
      <HoverSpotlightWrapper levelUp={levelUp}>
        <CardContent title={title} value={value} rate={rate} levelUp={levelUp} icon={icon} />
      </HoverSpotlightWrapper>
    );
  }

  return (
    <div className="relative rounded-md border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <CardContent title={title} value={value} rate={rate} levelUp={levelUp} icon={icon} />
    </div>
  );
}
