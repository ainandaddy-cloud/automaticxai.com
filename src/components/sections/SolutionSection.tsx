import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, Target, RotateCcw, DollarSign, CheckCircle, TrendingUp, ArrowRight } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const SolutionSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { isDark } = useTheme();

  const solutions = [
    {
      icon: Zap,
      title: "10x Growth Potential",
      description: "AI makes 10,000+ calls or bookings per day",
      color: "text-accent-500",
      bgColor: "bg-accent-500/20",
      borderColor: "border-accent-500/30"
    },
    {
      icon: Target,
      title: "Automated Lead Qualification",
      description: "Filters low-quality leads instantly",
      color: "text-accent-500",
      bgColor: "bg-accent-500/20",
      borderColor: "border-accent-500/30"
    },
    {
      icon: RotateCcw,
      title: "Instant Follow-Ups",
      description: "AI never forgets or delays",
      color: "text-accent-500",
      bgColor: "bg-accent-500/20",
      borderColor: "border-accent-500/30"
    },
    {
      icon: DollarSign,
      title: "Massive Cost Savings",
      description: "Save $415,200+ annually",
      color: "text-accent-500",
      bgColor: "bg-accent-500/20",
      borderColor: "border-accent-500/30"
    }
  ];

  const chartData = [
    { month: 'Month 1', human: 1000, ai: 2500 },
    { month: 'Month 3', human: 1200, ai: 5000 },
    { month: 'Month 6', human: 1500, ai: 8500 },
    { month: 'Month 12', human: 1800, ai: 15000 }
  ];

  return (
    <section id="solution" className="py-16 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full filter blur-3xl animate-float ${
          isDark ? 'bg-accent-500/10' : 'bg-accent-500/5'
        }`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full filter blur-3xl animate-float ${
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
            <CheckCircle className="w-4 h-4 mr-2 text-accent-500" />
            THE AI ADVANTAGE
            <CheckCircle className="w-4 h-4 ml-2 text-accent-500" />
          </div>
          
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-dark-900'
          }`}>
            Meet Your New <span className="text-accent-500">AI Workforce</span>
          </h2>
          
          <p className={`text-xl md:text-2xl mb-12 max-w-4xl mx-auto ${
            isDark ? 'text-text-secondary' : 'text-dark-600'
          }`}>
            Why scale with humans when AI can do it better?
          </p>
        </motion.div>

        {/* Solution Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                className={`glass-card p-6 interactive-card group border-l-4 ${solution.borderColor}`}
              >
                <div className={`w-12 h-12 rounded-xl ${solution.bgColor} border ${solution.borderColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 glow-on-hover`}>
                  <CheckCircle className="w-6 h-6 text-accent-500" />
                </div>
                <div className="flex items-center mb-2">
                  <IconComponent className={`w-5 h-5 ${solution.color} mr-2`} />
                  <h3 className={`text-lg font-semibold ${
                    isDark ? 'text-white' : 'text-dark-900'
                  }`}>
                    {solution.title}
                  </h3>
                </div>
                <p className={`${
                  isDark ? 'text-text-secondary' : 'text-dark-600'
                }`}>
                  {solution.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Growth Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="glass-card p-8 interactive-card max-w-5xl mx-auto"
        >
          <h3 className={`text-2xl font-bold mb-8 text-center ${
            isDark ? 'text-white' : 'text-dark-900'
          }`}>
            Growth & Performance Comparison: AI vs Human
          </h3>
          
          <div className="space-y-6">
            {chartData.map((data, index) => (
              <div key={index} className="space-y-4">
                <div className={`font-semibold text-lg ${
                  isDark ? 'text-white' : 'text-dark-900'
                }`}>
                  {data.month}
                </div>
                
                {/* Human Performance */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className={`font-medium ${
                      isDark ? 'text-text-secondary' : 'text-dark-600'
                    }`}>Human Team</span>
                    <span className="text-red-500 font-semibold">{data.human.toLocaleString()} calls/day</span>
                  </div>
                  <div className={`h-4 rounded-full overflow-hidden ${
                    isDark ? 'bg-dark-700/50' : 'bg-light-600/50'
                  }`}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${(data.human / 15000) * 100}%` } : { width: 0 }}
                      transition={{ duration: 1.5, delay: 0.8 + (index * 0.2) }}
                      className="h-4 bg-gradient-to-r from-red-500 to-red-400 rounded-full"
                    />
                  </div>
                </div>

                {/* AI Performance */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className={`font-medium ${
                      isDark ? 'text-text-secondary' : 'text-dark-600'
                    }`}>AI Team</span>
                    <span className="text-accent-500 font-semibold">{data.ai.toLocaleString()} calls/day</span>
                  </div>
                  <div className={`h-4 rounded-full overflow-hidden ${
                    isDark ? 'bg-dark-700/50' : 'bg-light-600/50'
                  }`}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${(data.ai / 15000) * 100}%` } : { width: 0 }}
                      transition={{ duration: 1.5, delay: 1.0 + (index * 0.2) }}
                      className="h-4 bg-gradient-to-r from-accent-500 to-accent-400 rounded-full relative overflow-hidden"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 2.5 + index }}
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Performance Summary */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            <div className="text-center p-4 rounded-xl bg-gradient-to-r from-accent-500/20 to-accent-400/20 border border-accent-500/30">
              <TrendingUp className="w-8 h-8 text-accent-500 mx-auto mb-2" />
              <div className="text-accent-500 font-bold text-2xl">833%</div>
              <div className={`text-sm font-medium ${
                isDark ? 'text-white' : 'text-dark-900'
              }`}>Performance Increase</div>
            </div>
            
            <div className="text-center p-4 rounded-xl bg-gradient-to-r from-accent-500/20 to-accent-400/20 border border-accent-500/30">
              <DollarSign className="w-8 h-8 text-accent-500 mx-auto mb-2" />
              <div className="text-accent-500 font-bold text-2xl">87%</div>
              <div className={`text-sm font-medium ${
                isDark ? 'text-white' : 'text-dark-900'
              }`}>Cost Reduction</div>
            </div>
            
            <div className="text-center p-4 rounded-xl bg-gradient-to-r from-accent-500/20 to-accent-400/20 border border-accent-500/30">
              <Zap className="w-8 h-8 text-accent-500 mx-auto mb-2" />
              <div className="text-accent-500 font-bold text-2xl">24/7</div>
              <div className={`text-sm font-medium ${
                isDark ? 'text-white' : 'text-dark-900'
              }`}>Always Available</div>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => {
              const element = document.querySelector('#contact')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                setTimeout(() => {
                  window.scrollBy({ top: -100, behavior: 'smooth' })
                }, 300)
              }
            }}
            className="btn btn-primary text-lg px-10 py-5"
          >
            <Zap className="w-5 h-5 mr-2" />
            SEE AI IN ACTION
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;