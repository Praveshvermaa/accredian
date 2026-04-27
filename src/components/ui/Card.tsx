import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function Card({ children, className = '', hoverEffect = true }: CardProps) {
  return (
    <div className={`bg-white rounded-xl border border-gray-100 p-6 shadow-sm transition-all duration-300 ${hoverEffect ? 'hover:shadow-md hover:-translate-y-1' : ''} ${className}`}>
      {children}
    </div>
  );
}
