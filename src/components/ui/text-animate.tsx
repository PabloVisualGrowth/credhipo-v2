"use client";

import { cn } from "@/lib/utils";
import { motion, Variants, useInView } from "framer-motion";
import { useRef, useMemo } from "react";

type AnimationType = "blurInUp" | "fadeIn" | "slideUp" | "scaleIn";
type ByType = "character" | "word" | "line";

interface TextAnimateProps {
  children: string;
  className?: string;
  animation?: AnimationType;
  by?: ByType;
  duration?: number;
  delay?: number;
  once?: boolean;
  as?: React.ElementType;
}

const animationVariants: Record<AnimationType, Variants> = {
  blurInUp: {
    hidden: { opacity: 0, y: 20, filter: "blur(2px)" }, // Optimization: reduced from 8px
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
};

export function TextAnimate({
  children,
  className,
  animation = "blurInUp",
  by = "word",
  duration = 0.3,
  delay = 0,
  once = true,
  as: Component = "p",
}: TextAnimateProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-100px" });

  const segments = useMemo(() => {
    if (by === "character") {
      return children.split("");
    } else if (by === "word") {
      return children.split(/(\s+)/);
    } else {
      return children.split("\n");
    }
  }, [children, by]);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: by === "character" ? 0.015 : 0.04,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = animationVariants[animation];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={cn("inline-block", className)}
    >
      <Component className="inline">
        {segments.map((segment, index) => (
          <motion.span
            key={index}
            variants={itemVariants}
            transition={{
              duration,
              ease: "easeOut",
            }}
            className="inline-block whitespace-pre"
          >
            {segment}
          </motion.span>
        ))}
      </Component>
    </motion.div>
  );
}
