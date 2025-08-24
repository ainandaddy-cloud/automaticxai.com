import { DollarSign, Clock, Users, Target } from 'lucide-react';

export const metricsData = [
  {
    icon: DollarSign,
    value: 12500,
    prefix: '$',
    suffix: '+',
    label: 'REVENUE GENERATED',
    color: 'text-accent-500',
    bgColor: 'bg-accent-500/20',
    borderColor: 'border-accent-500/40',
  },
  {
    icon: Clock,
    value: 2400,
    suffix: '+',
    label: 'HOURS SAVED',
    color: 'text-accent-500',
    bgColor: 'bg-accent-500/20',
    borderColor: 'border-accent-500/40',
  },
  {
    icon: Users,
    value: 25,
    suffix: '+',
    label: 'CLIENTS SERVED',
    color: 'text-accent-500',
    bgColor: 'bg-accent-500/20',
    borderColor: 'border-accent-500/40',
  },
  {
    icon: Target,
    value: 96.5,
    suffix: '%',
    label: 'SUCCESS RATE',
    color: 'text-accent-500',
    bgColor: 'bg-accent-500/20',
    borderColor: 'border-accent-500/40',
  },
];