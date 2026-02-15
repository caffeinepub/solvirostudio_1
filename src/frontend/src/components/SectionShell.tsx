import { ReactNode } from 'react';
import { cn } from '../lib/utils';

interface SectionShellProps {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

export default function SectionShell({ id, title, children, className }: SectionShellProps) {
  return (
    <div id={id} className={cn('py-20 lg:py-32', className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-solviro-yellow via-solviro-amber to-solviro-orange mx-auto rounded-full" />
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
