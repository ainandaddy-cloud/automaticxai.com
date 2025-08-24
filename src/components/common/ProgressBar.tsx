import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

interface ProgressBarProps {
  label: string;
  value: number;
  color: string;
  index: number;
  inView: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  label,
  value,
  color,
  index,
  inView
}) => {
  const { isDark } = useTheme();

  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className={isDark ? 'text-text-secondary' : 'text-dark-600'}>{label}</span>
        <span className={`font-semibold text-accent-500`}>{value}%</span>
      </div>
      <div className={`h-2 rounded-full overflow-hidden ${
        isDark ? 'bg-dark-700/50' : 'bg-light-600/50'
      }`}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${value}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay: 0.5 + (index * 0.2) }}
          className={`h-full ${color} rounded-full`}
        />
      </div>
    </div>
  );
};

export default ProgressBar;