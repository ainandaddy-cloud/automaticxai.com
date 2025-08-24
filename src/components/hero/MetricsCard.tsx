import React from 'react';
import { TrendingUp, Clock, Zap, Target } from 'lucide-react';

const MetricsCard: React.FC = () => {
  const metrics = [
    {
      icon: TrendingUp,
      label: 'ROI INCREASE',
      value: '300%',
      color: 'text-primary-400',
      bgColor: 'bg-primary-500/20',
      borderColor: 'border-primary-500/40'
    },
    {
      icon: Clock,
      label: 'TIME SAVED',
      value: '75%',
      color: 'text-accent-400',
      bgColor: 'bg-accent-500/20',
      borderColor: 'border-accent-500/40'
    },
    {
      icon: Zap,
      label: 'EFFICIENCY',
      value: '90%',
      color: 'text-primary-300',
      bgColor: 'bg-primary-400/20',
      borderColor: 'border-primary-400/40'
    },
    {
      icon: Target,
      label: 'ACCURACY',
      value: '99.2%',
      color: 'text-accent-300',
      bgColor: 'bg-accent-400/20',
      borderColor: 'border-accent-400/40'
    }
  ];

  return (
    <div className="glass-card p-8 interactive-card">
      <h3 className="text-2xl font-semibold text-text-primary mb-6 text-center">PERFORMANCE METRICS</h3>
      <div className="grid grid-cols-2 gap-4">
        {metrics.map((metric, index) => {
          const IconComponent = metric.icon;
          return (
            <div 
              key={index} 
              className={`${metric.bgColor} backdrop-blur-glass rounded-xl p-6 border ${metric.borderColor} hover:scale-105 transition-all duration-300 text-center glow-on-hover`}
            >
              <IconComponent className={`h-8 w-8 ${metric.color} mx-auto mb-3`} />
              <div className={`text-3xl font-bold ${metric.color} mb-2`}>{metric.value}</div>
              <div className="text-xs text-text-secondary font-medium tracking-wider">{metric.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MetricsCard;