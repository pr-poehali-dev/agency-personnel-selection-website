import React from 'react';
import * as LucideIcons from 'lucide-react';

interface IconProps {
  name: string;
  size?: number;
  className?: string;
  fallback?: string;
  color?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = 24, className = '', fallback = 'CircleAlert', color }) => {
  const IconComponent = LucideIcons[name as keyof typeof LucideIcons] || 
                        LucideIcons[fallback as keyof typeof LucideIcons];
  
  if (!IconComponent) {
    return null;
  }
  
  return (
    <IconComponent size={size} className={className} color={color} />
  );
};

export default Icon;
