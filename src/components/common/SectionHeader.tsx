import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  inView: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  icon: Icon,
  inView
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      {badge && (
        <div className="inline-flex items-center px-6 py-3 glass-card text-primary-400 text-sm font-medium mb-6 glow-on-hover">
          {Icon && <Icon className="w-4 h-4 mr-2" />}
          {badge}
          {Icon && <Icon className="w-4 h-4 ml-2" />}
        </div>
      )}
      
      <h2 className="section-title text-center mb-6">
        {title}
      </h2>
      
      {subtitle && (
        <p className="section-subtitle mx-auto text-center">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;