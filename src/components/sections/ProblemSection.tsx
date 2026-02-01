import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { DollarSign, Clock, AlertTriangle, X, TrendingDown } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const ProblemSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { isDark } = useTheme();

  const painPoints = [
    {
      icon: DollarSign,
      title: "High Costs",
      description: "$475,200/year for a 10-agent team",
      color: isDark ? "text-white" : "text-dark-900"
    },
    {
      icon: TrendingDown,
      title: "Low Productivity", 
      description: "Just ~1,000 calls/bookings per team per day",
      color: isDark ? "text-white" : "text-dark-900"
    },
    {
      icon: Clock,
      title: "Slow Response Time",
      description: "Manual follow-ups are inefficient",
      color: isDark ? "text-white" : "text-dark-900"
    },
    {
      icon: AlertTriangle,
      title: "Inconsistent Output",
      description: "Humans forget scripts, miss follow-ups & burn out",
      color: isDark ? "text-white" : "text-dark-900"
    }
  ];

  return (
    <section id="problem" className="py-16 relative overflow-x-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/4 right-1/4 w-96 h-96 rounded-full filter blur-3xl animate-float ${
          isDark ? 'bg-accent-500/10' : 'bg-accent-500/5'
        }`}></div>
        <div className={`absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full filter blur-3xl animate-float ${
          isDark ? 'bg-accent-500/8' : 'bg-accent-500/4'
        }`} style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className={`inline-flex items-center px-6 py-3 glass-card text-sm font-medium mb-6 glow-on-hover ${
            isDark ? 'text-accent-400' : 'text-accent-600'
          }`}>
            <AlertTriangle className="w-4 h-4 mr-2 text-accent-500" />
            PAIN POINTS & MARKET GAP
            <AlertTriangle className="w-4 h-4 ml-2 text-accent-500" />
          </div>
          
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-dark-900'
          }`}>
            The Hidden Costs of Relying on <span className={isDark ? "text-white" : "text-dark-900"}>Humans Alone</span>
          </h2>
          
          <p className={`text-xl md:text-2xl mb-12 max-w-4xl mx-auto ${
            isDark ? 'text-text-secondary' : 'text-dark-600'
          }`}>
            The traditional way of operating is slow, costly, and unreliable
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Pain Points */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {painPoints.map((point, index) => {
              const IconComponent = point.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  className="glass-card p-6 interactive-card group border-l-4 border-accent-500"
                >
                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent-500/20 border border-accent-500/30 mr-4 group-hover:scale-110 transition-transform duration-300">
                      <X className={`w-6 h-6 ${isDark ? 'text-white' : 'text-dark-900'}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <IconComponent className={`w-5 h-5 ${point.color} mr-2`} />
                        <h3 className={`text-xl font-semibold ${
                          isDark ? 'text-white' : 'text-dark-900'
                        }`}>
                          {point.title}
                        </h3>
                      </div>
                      <p className={`text-lg ${
                        isDark ? 'text-text-secondary' : 'text-dark-600'
                      }`}>
                        {point.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Cost Comparison Chart */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card p-8 interactive-card"
          >
            <h3 className={`text-2xl font-bold mb-8 text-center ${
              isDark ? 'text-white' : 'text-dark-900'
            }`}>
              Cost of Traditional Human Teams vs AI
            </h3>
            
            <div className="space-y-8">
              {/* Human Team Bar */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className={`font-semibold ${
                    isDark ? 'text-white' : 'text-dark-900'
                  }`}>Human Team</span>
                  <span className={`font-bold text-xl ${isDark ? 'text-white' : 'text-dark-900'}`}>$475,200</span>
                </div>
                <div className={`h-8 rounded-full overflow-hidden ${
                  isDark ? 'bg-dark-700/50' : 'bg-light-600/50'
                }`}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: '100%' } : { width: 0 }}
                    transition={{ duration: 1.5, delay: 0.8 }}
                    className={`h-8 rounded-full relative overflow-hidden ${
                      isDark ? 'bg-gradient-to-r from-white/80 to-white/60' : 'bg-gradient-to-r from-dark-900/80 to-dark-900/60'
                    }`}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 2.3 }}
                    />
                  </motion.div>
                </div>
              </div>

              {/* AI Agent Bar */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className={`font-semibold ${
                    isDark ? 'text-white' : 'text-dark-900'
                  }`}>AI Agent</span>
                  <span className="text-accent-500 font-bold text-xl">$60,000</span>
                </div>
                <div className={`h-8 rounded-full overflow-hidden ${
                  isDark ? 'bg-dark-700/50' : 'bg-light-600/50'
                }`}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: '12.6%' } : { width: 0 }}
                    transition={{ duration: 1.5, delay: 1.2 }}
                    className="h-8 bg-gradient-to-r from-accent-500 to-accent-400 rounded-full relative overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 2.7 }}
                    />
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Savings Highlight */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="mt-8 p-6 rounded-xl bg-gradient-to-r from-accent-500/20 to-accent-400/20 border border-accent-500/30 text-center"
            >
              <div className="text-accent-500 font-bold text-3xl mb-2">87% COST REDUCTION</div>
              <div className={`font-medium ${
                isDark ? 'text-white' : 'text-dark-900'
              }`}>Save $415,200+ annually with AI automation</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;