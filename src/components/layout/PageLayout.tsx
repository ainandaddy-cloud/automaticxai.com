import React from 'react';
import { ThemeProvider } from '../../contexts/ThemeContext';
import Navigation from './Navigation';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="min-h-screen font-inter overflow-x-hidden">
        <Navigation />
        <main>
          {children}
        </main>
      </div>
    </ThemeProvider>
  );
};

export default PageLayout;