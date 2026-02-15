import { Button } from './ui/button';
import { cn } from '../lib/utils';
import { ComponentProps } from 'react';

interface GradientCTAButtonProps extends ComponentProps<typeof Button> {
  children: React.ReactNode;
}

export default function GradientCTAButton({
  children,
  className,
  ...props
}: GradientCTAButtonProps) {
  return (
    <Button
      className={cn(
        'bg-gradient-to-r from-solviro-yellow via-solviro-amber to-solviro-orange',
        'hover:shadow-xl hover:scale-105',
        'text-white font-semibold',
        'transition-all duration-300',
        'border-0',
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}
