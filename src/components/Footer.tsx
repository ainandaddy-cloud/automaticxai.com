import React from 'react';
import { Brain, Linkedin, Instagram, Twitter, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const Footer: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <footer className={`py-12 border-t backdrop-blur-glass ${
      isDark 
        ? 'bg-dark-900/50 border-white/10' 
        : 'bg-light-900/50 border-dark-900/10'
    }`}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className={`flex items-center space-x-2 mb-4 ${
              isDark ? 'text-white' : 'text-dark-900'
            }`}>
              <div className="w-10 h-10 rounded-lg bg-gradient-button flex items-center justify-center">
                <Brain className="w-6 h-6 text-dark-900" />
              </div>
              <span className="text-xl font-semibold font-inter">AutomaticxAI</span>
            </div>
            
            <p className={`mb-4 max-w-md ${
              isDark ? 'text-text-secondary' : 'text-dark-600'
            }`}>
              AI automation agency helping businesses save time, cut costs, and scale with custom AI solutions. Focused on delivering measurable business impact.
            </p>
            
            <div className="flex space-x-3">
              {[
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
                { icon: Mail, href: "mailto:mohammedainan3@gmail.com", label: "Email" }
              ].map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a 
                    key={index}
                    href={social.href}
                    target={social.href.startsWith('http') ? "_blank" : undefined}
                    rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    className={`w-9 h-9 rounded-full glass-card flex items-center justify-center transition-all duration-300 glow-on-hover ${
                      isDark 
                        ? 'text-text-secondary hover:text-accent-400' 
                        : 'text-dark-600 hover:text-accent-600'
                    }`}
                    aria-label={social.label}
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className={`font-semibold text-lg mb-4 font-inter ${
              isDark ? 'text-white' : 'text-dark-900'
            }`}>Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '#hero' },
                { name: 'Services', href: '#services' },
                { name: 'Testimonials', href: '#testimonials' },
                { name: 'Contact Us', href: '#contact' }
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className={`transition-colors btn-underline-hover ${
                      isDark
                        ? 'text-text-secondary hover:text-accent-400'
                        : 'text-dark-600 hover:text-accent-600'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className={`font-semibold text-lg mb-4 font-inter ${
              isDark ? 'text-white' : 'text-dark-900'
            }`}>Contact</h3>
            <ul className="space-y-3">
              <li className={isDark ? 'text-text-secondary' : 'text-dark-600'}>
                <strong className={isDark ? 'text-white' : 'text-dark-900'}>Email:</strong>
                <br />
                <a
                  href="mailto:ainan@automaticxai.online"
                  className={`transition-colors btn-underline-hover ${
                    isDark ? 'hover:text-accent-400' : 'hover:text-accent-600'
                  }`}
                >
                  ainan@automaticxai.online
                </a>
              </li>
              <li>
                <motion.div
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg glass-card interactive-card ${
                    isDark ? 'bg-accent-500/10' : 'bg-accent-500/5'
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Clock className="w-4 h-4 text-accent-500" />
                  </motion.div>
                  <div className="flex flex-col">
                    <strong className={`text-sm ${isDark ? 'text-accent-400' : 'text-accent-600'}`}>
                      Available 24/7
                    </strong>
                    <span className={`text-xs ${isDark ? 'text-text-secondary' : 'text-dark-600'}`}>
                      Always ready to help
                    </span>
                  </div>
                </motion.div>
              </li>
              <li>
                <a
                  href="#contact"
                  className={`font-medium transition-colors btn-underline-hover inline-block ${
                    isDark ? 'text-accent-400 hover:text-accent-300' : 'text-accent-600 hover:text-accent-500'
                  }`}
                >
                  Book a Free Consultation
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className={`mt-8 pt-6 border-t flex flex-col md:flex-row justify-between items-center ${
          isDark ? 'border-white/10' : 'border-dark-900/10'
        }`}>
          <p className={`text-sm ${
            isDark ? 'text-text-muted' : 'text-dark-500'
          }`}>
            <span className="text-accent-500">©</span> 2025 AutomaticxAI — AI Solutions Built for Business Impact
          </p>
          
          <div className="flex space-x-6 mt-3 md:mt-0">
            <a 
              href="#" 
              className={`text-sm transition-colors btn-underline-hover ${
                isDark 
                  ? 'text-text-muted hover:text-text-secondary' 
                  : 'text-dark-500 hover:text-dark-600'
              }`}
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className={`text-sm transition-colors btn-underline-hover ${
                isDark 
                  ? 'text-text-muted hover:text-text-secondary' 
                  : 'text-dark-500 hover:text-dark-600'
              }`}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;