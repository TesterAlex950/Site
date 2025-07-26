'use client';

import { cn } from '@/lib/utils';
import React, { type ReactNode, useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

interface FlippingCardProps {
  icon: ReactNode;
  name: string;
  description: string;
  className?: string;
  details?: string | string[] | ReactNode;
}

export function FlippingCard({ icon, name, description, className, details }: FlippingCardProps) {
  const [shadowAnimStyle, setShadowAnimStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    const duration = (Math.random() * 3 + 3).toFixed(2); // 3-6s
    const delay = (Math.random() * 3).toFixed(2); // 0-3s
    setShadowAnimStyle({
      animationDuration: `${duration}s`,
      animationDelay: `${delay}s`,
    });
  }, []);

  return (
    <div className={cn('flipper h-24', className)} style={{ willChange: 'transform' }}>
      <div className='flip-inner rounded-lg shadow-md'>
        {/* Front */}
        <div className='flip-front'>
          <Card
            className='h-full bg-card animate-shadow-pulse flex flex-col justify-center items-center'
            style={shadowAnimStyle}
          >
            <CardHeader className='flex flex-row items-center justify-center gap-3 w-full'>
              {icon}
              <CardTitle className='font-headline text-center'>{name}</CardTitle>
            </CardHeader>
          </Card>
        </div>
        {/* Back */}
        <div className='flip-back'>
          <Card className='h-full bg-card' style={shadowAnimStyle}>
            <CardContent className='p-4 flex flex-col justify-center items-center h-full text-center'>
              {Array.isArray(details) ? (
                <ul className='text-sm text-muted-foreground space-y-1 list-none'>
                  {details.slice(0, 3).map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              ) : typeof details === 'string' ? (
                <p className='text-sm text-muted-foreground'>{details || description}</p>
              ) : (
                <div className='text-sm text-muted-foreground'>{details}</div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
