'use client';

import { cn } from '@/lib/utils';
import { useCallback, useEffect, useRef, type ReactNode } from 'react';

interface GradientCardProps {
  children: ReactNode;
  className?: string;
}

export function GradientCard({ children, className }: GradientCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const setMousePosition = (x: number, y: number) => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition(x, y);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const touch = e.touches[0];
    if (!touch) return;
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    setMousePosition(x, y);
  }, []);

  useEffect(() => {
    const card = cardRef.current;
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    if (card) {
      card.addEventListener('touchmove', handleTouchMove, { passive: true });
      card.addEventListener('touchstart', handleTouchMove, { passive: true });
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (card) {
        card.removeEventListener('touchmove', handleTouchMove);
        card.removeEventListener('touchstart', handleTouchMove);
      }
    };
  }, [handleMouseMove, handleTouchMove]);

  return (
    <div ref={cardRef} className={cn('relative gradient-card rounded-lg', className)}>
      <div className='relative z-10 h-full w-full rounded-lg bg-card p-1'>{children}</div>
    </div>
  );
}
