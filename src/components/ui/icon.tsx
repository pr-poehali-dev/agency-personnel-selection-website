import React from 'react';
import * as LucideIcons from 'lucide-react';

interface IconProps {
  name: string;
  fallback?: string;
  size?: number;
  color?: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, fallback = 'CircleAlert', size = 24, color, className = '' }) => {
  // @ts-ignore - dynamic icon import
  const IconComponent = LucideIcons[name] || LucideIcons[fallback];

  return <IconComponent size={size} color={color} className={className} />;
};

export default Icon;
