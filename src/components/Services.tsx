import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Zap } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { useTheme } from '../contexts/ThemeContext';

const MarqueeServices: React.FC = () => {
  const { isDark } = useTheme();
  
  const handleLearnMoreClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="relative overflow-hidden py-6">
      <div className="flex animate-marquee hover:pause">
        {[...servicesData, ...servicesData].map((service, index) => {
          const IconComponent = service.icon;
          return (
            <motion.div
              key={index}
              className="flex-shrink-0 mx-4 glass-card p-5 w-72 interactive-card group"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center mb-3">
                <motion.div 
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mr-3 border transition-all duration-300 ${
                    isDark 
                      ? 'bg-gradient-card text-accent-500 border-accent-500/30 group-hover:border-accent-400/50' 
                      : 'bg-gradient-card-light text-accent-600 border-accent-600/30 group-hover:border-accent-500/50'
                  } glow-on-hover`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <IconComponent className="w-5 h-5" />
                </motion.div>
                <h3 className={`text-lg font-semibold transition-colors ${
                  isDark ? 'text-white group-hover:text-accent-400' : 'text-dark-900 group-hover:text-accent-600'
                }`}>
                  {service.title}
                </h3>
              </div>
              
              <p className={`mb-3 leading-relaxed text-sm ${
                isDark ? 'text-text-secondary' : 'text-dark-600'
              }`}>
                {service.description}
              </p>

              <ul className="space-y-1 mb-4">
                {service.features.slice(0, 3).map((feature, idx) => (
                  <motion.li 
                    key={idx} 
                    className={`flex items-center text-xs ${
                      isDark ? 'text-text-secondary' : 'text-dark-600'
                    }`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Zap className="w-3 h-3 text-accent-500 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <button 
                onClick={handleLearnMoreClick}
                className="btn btn-secondary w-full text-xs py-2"
              >
                BOOK CONSULTATION
                <ArrowRight className="w-3 h-3 ml-2" />
              </button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { isDark } = useTheme();

  return (
    <section 
      id="services"
      className="py-16 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-0 left-0 w-96 h-96 rounded-full filter blur-3xl animate-float ${
          isDark ? 'bg-accent-500/10.4' : 'bg-accent-500/5.2'
        }`}></div>
        <div className={`absolute bottom-0 right-0 w-96 h-96 rounded-full filter blur-3xl animate-float ${
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
            <Zap className="w-4 h-4 mr-2 text-accent-500" />
            PREMIUM AI SERVICES
            <Zap className="w-4 h-4 ml-2 text-accent-500" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-accent-500">
            SOLUTIONS THAT TRANSFORM BUSINESS
          </h2>
          
          <p className={`text-lg md:text-xl mb-8 max-w-4xl mx-auto ${
            isDark ? 'text-text-secondary' : 'text-dark-600'
          }`}>
            Choose from our comprehensive suite of AI solutions designed to optimize operations and accelerate growth.
          </p>
        </motion.div>

        <MarqueeServices />

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div
            className="inline-flex items-center px-8 py-4 glass-card glow-on-hover group"
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="w-6 h-6 text-accent-500 mr-3 group-hover:animate-pulse" />
            <span className={`font-semibold text-lg ${isDark ? 'text-white' : 'text-dark-900'}`}>ALL SOLUTIONS INCLUDE: </span>
            <span className="text-accent-500 font-semibold text-lg ml-2">24/7 SUPPORT • 99.9% UPTIME • MONEY-BACK GUARANTEE</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;