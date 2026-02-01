import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, ArrowRight, Zap, Crown, Target, Send } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const CTA: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { isDark } = useTheme();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    challenge: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    alert('Thank you! Your strategy session request has been submitted. We will contact you within 24 hours.');
    setFormData({ name: '', email: '', company: '', challenge: '' });
    setIsSubmitting(false);
  };

  const benefits = [
    "Comprehensive AI Strategy Assessment",
    "Custom Implementation Roadmap", 
    "ROI Analysis & Projections",
    "Technology Stack Recommendations",
    "Risk-Free Consultation"
  ];

  return (
    <section
      id="contact"
      className="py-16 relative overflow-x-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/4 right-1/4 w-96 h-96 rounded-full filter blur-3xl animate-float ${
          isDark ? 'bg-accent-500/10.4' : 'bg-accent-500/5.2'
        }`}></div>
        <div className={`absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full filter blur-3xl animate-float ${
          isDark ? 'bg-accent-500/7.8' : 'bg-accent-500/3.9'
        }`} style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <div className={`inline-flex items-center px-6 py-3 glass-card text-sm font-medium mb-6 glow-on-hover ${
              isDark ? 'text-accent-400' : 'text-accent-600'
            }`}>
              <Crown className="w-4 h-4 mr-2 text-accent-500" />
              TRANSFORM YOUR BUSINESS
              <Crown className="w-4 h-4 ml-2 text-accent-500" />
            </div>
            
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 leading-tight ${
              isDark ? 'text-white' : 'text-dark-900'
            }`}>
              READY TO <span className="text-accent-500">ACCELERATE</span><br />
              YOUR GROWTH?
            </h2>
            
            <p className={`text-lg leading-relaxed mb-6 ${
              isDark ? 'text-text-secondary' : 'text-dark-600'
            }`}>
              Book your complimentary strategy session and discover how AI can transform your business operations.
            </p>
            
            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center group"
                >
                  <CheckCircle className="w-5 h-5 text-accent-500 mr-3 flex-shrink-0 group-hover:animate-pulse" />
                  <span className={`font-medium transition-colors group-hover:text-accent-500 ${
                    isDark ? 'text-white' : 'text-dark-900'
                  }`}>{benefit}</span>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="glass-card p-4 glow-on-hover group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <Target className="w-5 h-5 text-accent-500 mr-2 group-hover:animate-spin" />
                  <span className={`font-semibold ${
                    isDark ? 'text-white' : 'text-dark-900'
                  }`}>NEXT AVAILABLE SLOT</span>
                </div>
                <div className="text-accent-500 font-bold text-lg animate-pulse">TODAY 3:00 PM</div>
              </div>
              <div className={`text-sm ${isDark ? 'text-text-secondary' : 'text-dark-600'}`}>
                <span className="text-accent-500">⚡</span> Limited availability this week
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div 
              className="glass-card p-8 interactive-card"
              whileHover={{ scale: 1.01 }}
            >
              <div className="text-center mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-dark-900'
                }`}>SCHEDULE CONSULTATION</h3>
                <p className="text-accent-500 font-semibold">Complimentary Strategy Session</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.3 }}
                >
                  <label htmlFor="name" className={`block text-sm font-semibold mb-2 tracking-wider ${
                    isDark ? 'text-white' : 'text-dark-900'
                  }`}>
                    FULL NAME <span className="text-accent-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all duration-300 font-medium backdrop-blur-glass ${
                      isDark 
                        ? 'bg-dark-800/50 border-white/20 text-white placeholder-text-muted' 
                        : 'bg-light-800/50 border-dark-900/20 text-dark-900 placeholder-dark-600'
                    }`}
                    placeholder="Enter your name"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.4 }}
                >
                  <label htmlFor="email" className={`block text-sm font-semibold mb-2 tracking-wider ${
                    isDark ? 'text-white' : 'text-dark-900'
                  }`}>
                    BUSINESS EMAIL <span className="text-accent-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all duration-300 font-medium backdrop-blur-glass ${
                      isDark 
                        ? 'bg-dark-800/50 border-white/20 text-white placeholder-text-muted' 
                        : 'bg-light-800/50 border-dark-900/20 text-dark-900 placeholder-dark-600'
                    }`}
                    placeholder="your@company.com"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.5 }}
                >
                  <label htmlFor="company" className={`block text-sm font-semibold mb-2 tracking-wider ${
                    isDark ? 'text-white' : 'text-dark-900'
                  }`}>
                    COMPANY NAME <span className="text-accent-500">*</span>
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all duration-300 font-medium backdrop-blur-glass ${
                      isDark 
                        ? 'bg-dark-800/50 border-white/20 text-white placeholder-text-muted' 
                        : 'bg-light-800/50 border-dark-900/20 text-dark-900 placeholder-dark-600'
                    }`}
                    placeholder="Your Company Inc."
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.6 }}
                >
                  <label htmlFor="challenge" className={`block text-sm font-semibold mb-2 tracking-wider ${
                    isDark ? 'text-white' : 'text-dark-900'
                  }`}>
                    BIGGEST BUSINESS CHALLENGE
                  </label>
                  <textarea
                    id="challenge"
                    name="challenge"
                    rows={3}
                    value={formData.challenge}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all duration-300 resize-none font-medium backdrop-blur-glass ${
                      isDark 
                        ? 'bg-dark-800/50 border-white/20 text-white placeholder-text-muted' 
                        : 'bg-light-800/50 border-dark-900/20 text-dark-900 placeholder-dark-600'
                    }`}
                    placeholder="What operational challenges would you like to solve with AI?"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.7 }}
                >
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary w-full text-lg py-4"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-dark-900 mr-2"></div>
                        BOOKING SESSION...
                      </>
                    ) : (
                      <>
                        <Zap className="w-5 h-5 mr-2" />
                        BOOK MY STRATEGY SESSION
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </button>
                </motion.div>
                
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className={`text-xs mb-1 ${
                    isDark ? 'text-text-secondary' : 'text-dark-600'
                  }`}>
                    <span className="text-accent-500">🔒</span> Your information is encrypted and secure
                  </div>
                  <div className="text-accent-500 font-semibold text-sm">
                    <span className="text-accent-500">⚡</span> 100% FREE • NO OBLIGATIONS • EXPERT INSIGHTS
                  </div>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;