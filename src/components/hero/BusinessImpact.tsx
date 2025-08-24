import React from 'react';
import { TrendingUp, Users, Clock, Award, Zap } from 'lucide-react';

const BusinessImpact: React.FC = () => {
  const metrics = [
    { label: 'COST REDUCTION', value: 45, color: 'bg-primary-500', textColor: 'text-primary-400' },
    { label: 'REVENUE GROWTH', value: 65, color: 'bg-accent-500', textColor: 'text-accent-400' },
    { label: 'OPERATIONAL EFFICIENCY', value: 80, color: 'bg-primary-400', textColor: 'text-primary-300' },
  ];

  const achievements = [
    { icon: TrendingUp, label: 'GROWTH', value: '+180%', color: 'text-primary-400' },
    { icon: Users, label: 'CLIENTS', value: '500+', color: 'text-accent-400' },
    { icon: Clock, label: 'SAVED', value: '40K hrs', color: 'text-primary-300' },
    { icon: Award, label: 'SUCCESS', value: '98.5%', color: 'text-accent-300' },
  ];

  return (
    <div className="glass-card p-8 interactive-card">
      <h3 className="text-2xl font-semibold text-text-primary mb-6 text-center">BUSINESS IMPACT</h3>
      
      <div className="space-y-6 mb-8">
        {metrics.map((metric, index) => (
          <div key={index}>
            <div className="flex justify-between mb-3">
              <span className="text-text-primary font-medium text-sm tracking-wider">{metric.label}</span>
              <span className={`font-semibold ${metric.textColor}`}>{metric.value}%</span>
            </div>
            <div className="w-full h-3 bg-dark-700/50 rounded-full overflow-hidden border border-white/10">
              <div 
                className={`h-3 ${metric.color} rounded-full transition-all duration-2000 ease-out`}
                style={{ width: `${metric.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3">
        {achievements.map((achievement, index) => {
          const IconComponent = achievement.icon;
          return (
            <div key={index} className="bg-glass backdrop-blur-glass rounded-lg p-4 border border-white/10 hover:scale-105 transition-all duration-300 glow-on-hover">
              <div className="flex items-center mb-2">
                <IconComponent className={`w-5 h-5 ${achievement.color} mr-2`} />
                <span className="text-xs text-text-secondary font-medium tracking-wider">{achievement.label}</span>
              </div>
              <div className={`text-xl font-bold ${achievement.color}`}>{achievement.value}</div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 p-4 bg-gradient-card rounded-xl border border-primary-500/20 text-center glow-on-hover">
        <div className="flex items-center justify-center mb-2">
          <Zap className="w-5 h-5 text-accent-400 mr-2" />
          <span className="text-text-primary font-medium">INDUSTRY LEADER</span>
        </div>
        <div className="text-2xl font-bold text-gradient-primary">#1 AI AUTOMATION</div>
        <div className="text-xs text-text-secondary mt-1">Trusted by Fortune 500</div>
      </div>
    </div>
  );
};

export default BusinessImpact;