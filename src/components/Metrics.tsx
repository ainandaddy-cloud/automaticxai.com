import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Zap, Crown } from 'lucide-react';
import Counter from './common/Counter';
import MetricCard from './common/MetricCard';
import { metricsData } from '../data/metricsData';
import { useTheme } from '../contexts/ThemeContext';

const Metrics: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { isDark } = useTheme();
  
  return (
    <section 
      id="impact" 
      className="py-16 relative overflow-hidden"
    >
      {/* Background effects - Increased intensity and radius */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/4 left-1/4 w-72 sm:w-144 h-72 sm:h-144 rounded-full filter blur-3xl animate-float ${
          isDark ? 'bg-accent-500/10.4' : 'bg-accent-500/5.2'
        }`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-60 sm:w-120 h-60 sm:h-120 rounded-full filter blur-3xl animate-float ${
          isDark ? 'bg-accent-500/7.8' : 'bg-accent-500/3.9'
        }`} style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className={`inline-flex items-center px-6 py-3 glass-card text-sm font-medium mb-4 glow-on-hover ${
            isDark ? 'text-accent-400' : 'text-accent-600'
          }`}>
            <Crown className="w-4 h-4 mr-2 text-accent-500" />
            PROVEN IMPACT METRICS
            <Crown className="w-4 h-4 ml-2 text-accent-500" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-accent-500">
            NUMBERS THAT SPEAK FOR THEMSELVES
          </h2>
          
          <p className={`text-lg md:text-xl mb-8 max-w-4xl mx-auto ${
            isDark ? 'text-text-secondary' : 'text-dark-600'
          }`}>
            Real metrics from real businesses that chose to transform their operations with our AI solutions.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metricsData.map((metric, index) => (
            <MetricCard
              key={index}
              icon={metric.icon}
              value={
                <Counter
                  end={metric.value}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                  inView={inView}
                />
              }
              label={metric.label}
              color={metric.color}
              bgColor={metric.bgColor}
              borderColor={metric.borderColor}
              index={index}
              inView={inView}
            />
          ))}
        </div>

        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="inline-flex items-center px-8 py-6 glass-card glow-on-hover"
          >
            <Award className="w-8 h-8 text-accent-500 mr-4" />
            <div className="text-left">
              <div className={`font-semibold text-xl ${isDark ? 'text-white' : 'text-dark-900'}`}>AVERAGE CLIENT ROI</div>
              <div className="text-accent-500 font-bold text-3xl">285% IN 6 MONTHS</div>
            </div>
            <Zap className="w-8 h-8 text-accent-500 ml-4" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;