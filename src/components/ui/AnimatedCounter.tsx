import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface AnimatedCounterProps {
  end: number;
  start?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  inView: boolean;
  className?: string;
  onComplete?: () => void;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  start = 0,
  duration = 2.5,
  prefix = '',
  suffix = '',
  decimals = 0,
  inView,
  className = '',
  onComplete
}) => {
  const [count, setCount] = useState(start);
  const countRef = useRef(start);
  const frameRef = useRef<number>();

  useEffect(() => {
    if (!inView) return;

    const startTime = Date.now();
    const startValue = countRef.current;
    const endValue = end;
    const totalDuration = duration * 1000;

    const updateCount = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / totalDuration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = startValue + (endValue - startValue) * easeOutQuart;

      countRef.current = currentValue;
      setCount(currentValue);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(updateCount);
      } else {
        onComplete?.();
      }
    };

    frameRef.current = requestAnimationFrame(updateCount);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [end, duration, inView, onComplete]);

  const formatNumber = (num: number) => {
    return num.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <motion.span 
      className={className}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {prefix}
      {formatNumber(count)}
      {suffix}
    </motion.span>
  );
};

export default AnimatedCounter;