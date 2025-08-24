import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-3 rounded-full glass-card glow-on-hover transition-all duration-300 hover:scale-110"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-accent-500" />
      ) : (
        <Moon className="w-5 h-5 text-accent-500" />
      )}
    </button>
  );
};

export default ThemeToggle;