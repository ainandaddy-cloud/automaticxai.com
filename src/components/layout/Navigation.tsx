import React from 'react';
import { Home, Settings, MessageCircle, Mail } from 'lucide-react';
import { NavBar } from '../ui/tubelight-navbar';

const Navigation: React.FC = () => {
  const navItems = [
    { name: 'Home', url: '#hero', icon: Home },
    { name: 'Services', url: '#services', icon: Settings },
    { name: 'Testimonials', url: '#testimonials', icon: MessageCircle },
    { name: 'Contact', url: '#contact', icon: Mail }
  ];

  return <NavBar items={navItems} />;
};

export default Navigation;