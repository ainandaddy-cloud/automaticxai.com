import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, Shield } from 'lucide-react';
import FeatureCard from './common/FeatureCard';
import ProgressBar from './common/ProgressBar';
import { featuresData } from '../data/featuresData';
import { useTheme } from '../contexts/ThemeContext';

const WhyChooseUs: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { isDark } = useTheme();

  const metrics = [
    { label: "Implementation Success", value: 98, color: "bg-accent-500" },
    { label: "Client Retention", value: 95, color: "bg-accent-500" },
    { label: "Performance Improvement", value: 87, color: "bg-accent-500" }
  ];

  return (
    <section className="py-12 relative overflow-hidden">
      {/* Background effects - Increased intensity and radius */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-0 left-0 w-72 sm:w-144 h-72 sm:h-144 rounded-full filter blur-3xl animate-float ${
          isDark ? 'bg-accent-500/6.5' : 'bg-accent-500/3.9'
        }`}></div>
        <div className={`absolute bottom-0 right-0 w-72 sm:w-144 h-72 sm:h-144 rounded-full filter blur-3xl animate-float ${
          isDark ? 'bg-accent-500/6.5' : 'bg-accent-500/3.9'
        }`} style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5 }}
          >
            <div className={`inline-flex items-center px-4 py-2 glass-card text-sm font-medium mb-4 ${
              isDark ? 'text-accent-400' : 'text-accent-600'
            }`}>
              <Shield className="w-4 h-4 mr-2 text-accent-500" />
              WHY CHOOSE US
              <Shield className="w-4 h-4 ml-2 text-accent-500" />
            </div>
            
            <h2 className={`text-3xl md:text-4xl font-semibold mb-4 ${
              isDark ? 'text-white' : 'text-dark-900'
            }`}>
              Built for <span className="text-accent-500">Enterprise Success</span>
            </h2>

            <p className={`text-lg mb-6 ${
              isDark ? 'text-text-secondary' : 'text-dark-600'
            }`}>
              We don't just build AI solutions – we deliver business transformations with measurable ROI and enterprise-grade reliability.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {featuresData.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  color={feature.color}
                  bgColor={feature.bgColor}
                  borderColor={feature.borderColor}
                  index={index}
                  inView={inView}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card p-6 interactive-card">
              <h3 className={`text-xl font-semibold mb-4 ${
                isDark ? 'text-white' : 'text-dark-900'
              }`}>Performance Metrics</h3>
              
              <div className="space-y-4">
                {metrics.map((metric, index) => (
                  <ProgressBar
                    key={index}
                    label={metric.label}
                    value={metric.value}
                    color={metric.color}
                    index={index}
                    inView={inView}
                  />
                ))}
              </div>

              <div className={`mt-6 p-4 rounded-lg border glow-on-hover ${
                isDark 
                  ? 'bg-gradient-card border-accent-500/20' 
                  : 'bg-gradient-card-light border-accent-600/20'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-accent-500 mr-2" />
                    <span className={`font-medium ${
                      isDark ? 'text-white' : 'text-dark-900'
                    }`}>Average Implementation</span>
                  </div>
                  <span className="text-accent-500 font-semibold">3 weeks</span>
                </div>
                <p className={`text-sm mt-1 ${
                  isDark ? 'text-text-secondary' : 'text-dark-600'
                }`}>From consultation to deployment</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;