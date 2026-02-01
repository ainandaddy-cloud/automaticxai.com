import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Zap, TrendingUp, Clock } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { Waves } from '../ui/waves-background';
import TypewriterText from '../ui/TypewriterText';
import { useTheme } from '../../contexts/ThemeContext';

const Hero: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { isDark } = useTheme();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-32 pb-12 overflow-x-hidden">
      {/* Animated background with increased wave intensity */}
      <div className="absolute inset-0">
        <Waves
          lineColor={isDark ? "rgba(52, 178, 123, 0.30)" : "rgba(52, 178, 123, 0.22)"}
          backgroundColor="transparent"
          waveSpeedX={0.008}
          waveSpeedY={0.003}
          waveAmpX={23}
          waveAmpY={13}
          friction={0.94}
          tension={0.003}
          maxCursorMove={45}
          xGap={14}
          yGap={26}
        />
      </div>

      {/* Floating orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full filter blur-3xl animate-float ${
          isDark ? 'bg-accent-500/16' : 'bg-accent-500/8'
        }`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full filter blur-3xl animate-float ${
          isDark ? 'bg-accent-500/13' : 'bg-accent-500/7'
        }`} style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-7xl mx-auto" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Main Headline with Typewriter */}
            <div className="text-center">
              <motion.div 
                className="block mb-6"
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className={`text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black font-outfit tracking-tight leading-none ${
                  isDark ? 'text-white' : 'text-dark-900'
                }`}>
                  AI THAT
                </span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-6"
              >
                <TypewriterText 
                  words={['TRANSFORMS', 'OPTIMIZES', 'REVOLUTIONIZES', 'ACCELERATES', 'EMPOWERS']} 
                  speed={100}
                  deleteSpeed={50}
                  pauseTime={1500}
                  className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black font-outfit text-accent-500 tracking-tight leading-none"
                />
              </motion.div>
              
              <motion.div 
                className="block"
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <span className={`text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black font-outfit tracking-tight leading-none ${
                  isDark ? 'text-white' : 'text-dark-900'
                }`}>
                  YOUR BUSINESS
                </span>
              </motion.div>
            </div>
            
            {/* Subheadline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12"
            >
              <p className={`text-xl md:text-2xl lg:text-3xl font-space-grotesk font-medium leading-relaxed max-w-5xl mx-auto ${
                isDark ? 'text-text-secondary' : 'text-dark-600'
              }`}>
                Harness the power of intelligent automation that doesn't just optimize—it transforms your operations.
              </p>
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-16"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.button
                onClick={() => {
                  const element = document.querySelector('#contact')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    setTimeout(() => {
                      window.scrollBy({ top: -100, behavior: 'smooth' })
                    }, 300)
                  }
                }}
                className="btn btn-primary text-lg md:text-xl font-space-grotesk font-semibold px-10 py-5 md:px-12 md:py-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <CheckCircle className="mr-3 h-5 w-5 md:h-6 md:w-6" />
                BOOK A CALL NOW FOR FREE
                <ArrowRight className="ml-3 h-5 w-5 md:h-6 md:w-6" />
              </motion.button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div 
              className="flex flex-wrap justify-center items-center gap-6 md:gap-8 mt-16"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {[
                { value: '$12,500+', label: 'Revenue Generated', delay: 0.2 },
                { value: '99.9%', label: 'Uptime Guaranteed', delay: 0.4 },
                { value: '24/7', label: 'Expert Support', delay: 0.6 }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: item.delay }}
                  className="flex items-center glass-card px-6 py-4 group"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-accent-500 font-bold font-space-grotesk text-lg md:text-xl mr-3">
                    {item.value}
                  </span>
                  <span className={`font-medium font-inter ${isDark ? 'text-text-secondary' : 'text-dark-600'}`}>
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom metrics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div 
              className="glass-card p-8 interactive-card group"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold font-outfit mb-8 text-accent-500 group-hover:text-accent-400 transition-colors">
                Performance Metrics
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: TrendingUp, label: 'ROI INCREASE', value: '300%', color: 'text-accent-500' },
                  { icon: Clock, label: 'TIME SAVED', value: '75%', color: 'text-accent-500' },
                  { icon: Zap, label: 'EFFICIENCY', value: '90%', color: 'text-accent-500' },
                  { icon: CheckCircle, label: 'ACCURACY', value: '99.2%', color: 'text-accent-500' }
                ].map((metric, index) => {
                  const IconComponent = metric.icon;
                  return (
                    <motion.div 
                      key={index} 
                      className="text-center p-6 rounded-xl glass-card group"
                      whileHover={{ scale: 1.05, rotate: 1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <IconComponent className={`h-10 w-10 ${metric.color} mx-auto mb-4`} />
                      <div className={`text-3xl md:text-4xl font-black font-outfit ${metric.color} mb-3`}>
                        {metric.value}
                      </div>
                      <div className={`text-xs font-semibold font-space-grotesk tracking-wider uppercase ${
                        isDark ? 'text-text-secondary' : 'text-dark-600'
                      }`}>{metric.label}</div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div 
              className="glass-card p-8 interactive-card group"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold font-outfit mb-8 text-accent-500 group-hover:text-accent-400 transition-colors">
                Business Impact
              </h3>
              <div className="space-y-8">
                {[
                  { label: 'COST REDUCTION', value: 45, color: 'bg-accent-500' },
                  { label: 'REVENUE GROWTH', value: 65, color: 'bg-accent-500' },
                  { label: 'OPERATIONAL EFFICIENCY', value: 80, color: 'bg-accent-500' },
                ].map((metric, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-4">
                      <span className={`font-semibold font-space-grotesk text-sm tracking-wider uppercase ${
                        isDark ? 'text-white' : 'text-dark-900'
                      }`}>{metric.label}</span>
                      <span className="font-bold font-outfit text-xl text-accent-500">{metric.value}%</span>
                    </div>
                    <div className={`w-full h-4 rounded-full overflow-hidden border ${
                      isDark ? 'bg-dark-700/50 border-white/10' : 'bg-light-600/50 border-dark-900/10'
                    }`}>
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${metric.value}%` } : { width: 0 }}
                        transition={{ duration: 1.5, delay: 1.6 + (index * 0.2) }}
                        className={`h-4 ${metric.color} rounded-full relative overflow-hidden`}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          animate={{ x: ['-100%', '100%'] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 2.2 + index }}
                        />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;