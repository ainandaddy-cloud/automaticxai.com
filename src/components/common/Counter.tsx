import React from 'react';
import AnimatedCounter from '../ui/AnimatedCounter';

interface CounterProps {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  inView: boolean;
  decimals?: number;
}

const Counter: React.FC<CounterProps> = ({ 
  end, 
  prefix = '', 
  suffix = '', 
  duration = 2.5, 
  inView,
  decimals = 0
}) => {
  return (
    <AnimatedCounter
      end={end}
      prefix={prefix}
      suffix={suffix}
      duration={duration}
      inView={inView}
      decimals={decimals}
      className="font-bold"
    />
  );
};

export default Counter;