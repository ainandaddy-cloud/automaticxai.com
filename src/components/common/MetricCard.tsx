import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

interface MetricCardProps {
  icon: LucideIcon;
  value: string | React.ReactNode;
  label: string;
  color: string;
  bgColor: string;
  borderColor: string;
  index: number;
  inView: boolean;
}

const MetricCard: React.FC<MetricCardProps> = ({
  icon: Icon,
  value,
  label,
  color,
  bgColor,
  borderColor,
  index,
  inView
}) => {
  const { isDark } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card text-center interactive-card group p-6"
    >
      <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${bgColor} flex items-center justify-center border ${borderColor} group-hover:scale-110 transition-transform duration-300 glow-on-hover`}>
        <Icon className={`w-8 h-8 ${color}`} />
      </div>
      <h3 className={`text-3xl font-bold mb-2 ${color}`}>
        {value}
      </h3>
      <p className={`font-medium tracking-wider text-sm ${
        isDark ? 'text-white' : 'text-dark-900'
      }`}>{label}</p>
    </motion.div>
  );
};

export default MetricCard;