import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

interface CounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export function CounterAnimation({ value, suffix = "", prefix = "", duration = 2 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const spring = useSpring(0, { 
    damping: 30, 
    stiffness: 100,
    duration: duration * 1000 
  });
  
  const display = useTransform(spring, (current) => {
    if (value >= 1000) {
      return `${prefix}${(current / 1000).toFixed(1)}K${suffix}`;
    }
    return `${prefix}${Math.round(current)}${suffix}`;
  });

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return (
    <motion.span ref={ref} className="tabular-nums">
      {display}
    </motion.span>
  );
}