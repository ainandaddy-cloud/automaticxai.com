import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, DollarSign, TrendingUp, Target } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Mission: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { isDark } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section 
      id="mission" 
      className="py-24 relative overflow-hidden"
    >
      {/* Background effects with increased intensity */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-0 left-0 w-96 h-96 rounded-full filter blur-3xl animate-float ${
          isDark ? 'bg-accent-500/10.725' : 'bg-accent-500/6.435'
        }`}></div>
        <div className={`absolute bottom-0 right-0 w-96 h-96 rounded-full filter blur-3xl animate-float ${
          isDark ? 'bg-accent-500/10.725' : 'bg-accent-500/6.435'
        }`} style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.span 
            variants={itemVariants}
            className={`inline-flex items-center px-4 py-1 rounded-full glass-card text-sm font-medium mb-4 ${
              isDark ? 'text-accent-400' : 'text-accent-600'
            }`}
          >
            <Target className="w-4 h-4 mr-2 text-accent-500" />
            OUR MISSION
            <Target className="w-4 h-4 ml-2 text-accent-500" />
          </motion.span>
          
          <motion.h2 
            variants={itemVariants}
            className="section-title mb-6"
          >
            We're On a Mission to Help 1,000+ Businesses Work Smarter
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="section-subtitle mb-12 mx-auto"
          >
            Our goal is simple: eliminate repetitive manual tasks and empower businesses with intelligent automation. From streamlining operations to scaling customer service and sales, we believe AI isn't the future — it's the present. And we're here to make it work for you.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Save Time",
                description: "Automate repetitive tasks and free up valuable time for strategic work",
                icon: Clock,
                color: "text-accent-500",
                bgColor: isDark ? "bg-gradient-card" : "bg-gradient-card-light",
                borderColor: "border-t-accent-500"
              },
              {
                title: "Cut Costs",
                description: "Reduce overhead and operational expenses with efficient AI solutions",
                icon: DollarSign,
                color: "text-accent-500",
                bgColor: isDark ? "bg-gradient-card" : "bg-gradient-card-light",
                borderColor: "border-t-accent-500"
              },
              {
                title: "Scale Fast",
                description: "Grow your business without proportionally increasing headcount",
                icon: TrendingUp,
                color: "text-accent-500",
                bgColor: isDark ? "bg-gradient-card" : "bg-gradient-card-light",
                borderColor: "border-t-accent-500"
              }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                  className={`glass-card border-t-2 ${item.borderColor} interactive-card`}
                >
                  <div className={`w-12 h-12 rounded-lg ${item.bgColor} flex items-center justify-center mb-4 mx-auto border ${item.borderColor.replace('border-t-', 'border-')}/30`}>
                    <IconComponent className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 text-center ${
                    isDark ? 'text-white' : 'text-dark-900'
                  }`}>
                    {item.title}
                  </h3>
                  <p className={`text-center ${
                    isDark ? 'text-text-secondary' : 'text-dark-600'
                  }`}>
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;