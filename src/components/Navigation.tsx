import React from 'react';
import { Home, User, Settings, Users, MessageCircle, Mail } from 'lucide-react';
import { NavBar } from './ui/tubelight-navbar';

const Navigation: React.FC = () => {
  const navItems = [
    { name: 'Home', url: '#hero', icon: Home },
    { name: 'Mission', url: '#mission', icon: User },
    { name: 'Services', url: '#services', icon: Settings },
    { name: 'Impact', url: '#impact', icon: Users },
    { name: 'Testimonials', url: '#testimonials', icon: MessageCircle },
    { name: 'Contact', url: '#contact', icon: Mail }
  ];

  return <NavBar items={navItems} />;
};

export default Navigation;