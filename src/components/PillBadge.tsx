import React from 'react';

interface PillBadgeProps {
  text: string;
  className?: string;
}

export const PillBadge: React.FC<PillBadgeProps> = ({ text, className }) => {
  return (
    <div className={`inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-300 backdrop-blur-md ${className}`}>
      <span className="flex h-2 w-2 rounded-full bg-blue-400 mr-2 animate-pulse"></span>
      {text}
    </div>
  );
};
