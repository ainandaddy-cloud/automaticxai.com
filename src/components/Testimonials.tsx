import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonialsData, Testimonial } from '../data/testimonialsData';
import { useTheme } from '../contexts/ThemeContext';

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  const { isDark } = useTheme();
  
  return (
    <div className="w-full flex-shrink-0 px-4">
      <div className="glass-card p-6 interactive-card">
        <div className="flex text-accent-500 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current" />
          ))}
        </div>
        
        <p className={`text-lg mb-6 italic font-medium leading-relaxed ${
          isDark ? 'text-white' : 'text-dark-900'
        }`}>
          <span className="text-accent-500">"</span>{testimonial.text}<span className="text-accent-500">"</span>
        </p>
        
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gradient-button flex items-center justify-center text-dark-900 font-semibold text-sm">
            {testimonial.name.charAt(0)}
          </div>
          <div className="ml-3">
            <h4 className={`font-semibold ${
              isDark ? 'text-white' : 'text-dark-900'
            }`}>{testimonial.name}</h4>
            <p className={`text-sm ${
              isDark ? 'text-text-secondary' : 'text-dark-600'
            }`}>{testimonial.position} at {testimonial.company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { isDark } = useTheme();

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section 
      id="testimonials" 
      className="py-16 relative overflow-hidden"
    >
      {/* Background effects - Increased intensity and radius */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-0 left-0 w-64 h-64 rounded-full filter blur-3xl animate-float ${
          isDark ? 'bg-accent-500/6.5' : 'bg-accent-500/3.9'
        }`}></div>
        <div className={`absolute bottom-0 right-0 w-96 h-96 rounded-full filter blur-3xl animate-float ${
          isDark ? 'bg-accent-500/6.5' : 'bg-accent-500/3.9'
        }`} style={{ animationDelay: '2s' }}></div>
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
            <Star className="w-4 h-4 mr-2 text-accent-500" />
            CLIENT TESTIMONIALS
            <Star className="w-4 h-4 ml-2 text-accent-500" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-accent-500">
            Businesses Like Yours Are Thriving With AI
          </h2>
          
          <p className={`text-lg md:text-xl mb-8 max-w-4xl mx-auto ${
            isDark ? 'text-text-secondary' : 'text-dark-600'
          }`}>
            Hear from our clients about how our AI solutions are transforming their operations and driving measurable growth.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonialsData.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-6 space-x-4">
            <button 
              onClick={prevTestimonial}
              className={`w-10 h-10 rounded-full glass-card flex items-center justify-center transition-all duration-300 glow-on-hover ${
                isDark ? 'text-text-secondary hover:text-accent-400' : 'text-dark-600 hover:text-accent-600'
              }`}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            <div className="flex space-x-2">
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    index === currentIndex 
                      ? 'bg-gradient-button shadow-glow-yellow' 
                      : (isDark ? 'bg-dark-600 hover:bg-accent-500/50' : 'bg-light-600 hover:bg-accent-500/50')
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className={`w-10 h-10 rounded-full glass-card flex items-center justify-center transition-all duration-300 glow-on-hover ${
                isDark ? 'text-text-secondary hover:text-accent-400' : 'text-dark-600 hover:text-accent-600'
              }`}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;