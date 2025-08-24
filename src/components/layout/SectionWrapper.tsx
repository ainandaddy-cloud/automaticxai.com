import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  animation?: 'fade-up' | 'slide-in-left' | 'slide-in-right' | 'scale-in';
  delay?: number;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  id,
  className = '',
  animation = 'fade-up',
  delay = 0
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animations = {
    'fade-up': {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 }
    },
    'slide-in-left': {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 }
    },
    'slide-in-right': {
      initial: { opacity: 0, x: 50 },
      animate: { opacity: 1, x: 0 }
    },
    'scale-in': {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 }
    }
  };

  const selectedAnimation = animations[animation];

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={selectedAnimation.initial}
      animate={inView ? selectedAnimation.animate : selectedAnimation.initial}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;