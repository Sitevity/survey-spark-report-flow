
import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  withText?: boolean;
}

const Logo = ({ size = 'md', withText = true }: LogoProps) => {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-14 w-14'
  };

  const textClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  return (
    <div className="flex items-center gap-2">
      <div className={`relative ${sizeClasses[size]}`}>
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-surveyspark-teal to-surveyspark-darkblue opacity-70"></div>
        <div className="absolute inset-1 rounded-full bg-white"></div>
        <div className="absolute inset-[20%] rounded-full bg-surveyspark-teal"></div>
      </div>
      {withText && (
        <div className={`font-bold ${textClasses[size]} text-surveyspark-darkblue`}>
          Survey<span className="text-surveyspark-teal">Spark</span>
        </div>
      )}
    </div>
  );
};

export default Logo;
