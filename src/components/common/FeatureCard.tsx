import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  borderColor: string;
  index: number;
  inView: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  color,
  bgColor,
  borderColor,
  index,
  inView
}) => {
  const { isDark } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`glass-card p-3 border ${borderColor} interactive-card`}
    >
      <div className={`w-8 h-8 rounded-lg ${bgColor} flex items-center justify-center ${color} mb-2`}>
        <Icon className="w-5 h-5" />
      </div>
      <h4 className={`font-semibold mb-1 text-sm ${
        isDark ? 'text-white' : 'text-dark-900'
      }`}>{title}</h4>
      <p className={`text-xs ${
        isDark ? 'text-text-secondary' : 'text-dark-600'
      }`}>{description}</p>
    </motion.div>
  );
};

export default FeatureCard;