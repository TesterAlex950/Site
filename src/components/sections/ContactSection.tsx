'use client';

import { useState } from 'react';
import { GradientCard } from '../common/GradientCard';
import { CardContent } from '../ui/card';

export function ContactSection() {
  const [phoneAnim, setPhoneAnim] = useState('');
  const [mailAnim, setMailAnim] = useState('');
  const [telegramAnim, setTelegramAnim] = useState('');
  return (
    <section id='contact' className='w-full py-16 md:py-24 lg:py-32'>
      <div className='container mx-auto px-4 md:px-6'>
        <GradientCard className='max-w-3xl mx-auto bg-card/70 backdrop-blur-sm shadow-lg shadow-primary/10'>
          <CardContent className='p-8 md:p-12 lg:p-16'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center mb-12'>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl font-headline'>
                Get in Touch
              </h2>
            </div>
            <div className='flex justify-center space-x-8'>
              <a
                href='https://t.me/dnlkandrii'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Telegram'
                className='text-foreground'
              >
                <div className='relative flex items-center justify-center w-12 h-12 group'>
                  <svg
                    className={`h-10 w-10 relative z-10 animate-glow-pulse ${telegramAnim}`}
                    onMouseEnter={() => {
                      setTelegramAnim('animate-telegram-fly');
                    }}
                    onMouseLeave={() => {
                      setTelegramAnim('');
                    }}
                    viewBox='0 0 24 24'
                    fill='url(#telegram-gradient)'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <defs>
                      <linearGradient id='telegram-gradient' x1='0' y1='0' x2='1' y2='0'>
                        <stop offset='0%' stopColor='#FFE5B4'>
                          <animate
                            attributeName='stop-color'
                            values='#FFE5B4;#FFB26B;#FFA552;#FF7F5C;#FF5C57;#FFBB33;#FFD369;#FF9A8B;#FFD8A9;#FF8C61;#FFE5B4'
                            dur='3s'
                            repeatCount='indefinite'
                          />
                        </stop>
                        <stop offset='100%' stopColor='#FF8C61'>
                          <animate
                            attributeName='stop-color'
                            values='#FF8C61;#FFE5B4;#FFB26B;#FFA552;#FF7F5C;#FF5C57;#FFBB33;#FFD369;#FF9A8B;#FFD8A9;#FF8C61'
                            dur='3s'
                            repeatCount='indefinite'
                          />
                        </stop>
                      </linearGradient>
                    </defs>
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M23.1117 4.49449C23.4296 2.94472 21.9074 1.65683 20.4317 2.227L2.3425 9.21601C0.694517 9.85273 0.621087 12.1572 2.22518 12.8975L6.1645 14.7157L8.03849 21.2746C8.13583 21.6153 8.40618 21.8791 8.74917 21.968C9.09216 22.0568 9.45658 21.9576 9.70712 21.707L12.5938 18.8203L16.6375 21.8531C17.8113 22.7334 19.5019 22.0922 19.7967 20.6549L23.1117 4.49449ZM3.0633 11.0816L21.1525 4.0926L17.8375 20.2531L13.1 16.6999C12.7019 16.4013 12.1448 16.4409 11.7929 16.7928L10.5565 18.0292L10.928 15.9861L18.2071 8.70703C18.5614 8.35278 18.5988 7.79106 18.2947 7.39293C17.9906 6.99479 17.4389 6.88312 17.0039 7.13168L6.95124 12.876L3.0633 11.0816ZM8.17695 14.4791L8.78333 16.6015L9.01614 15.321C9.05253 15.1209 9.14908 14.9366 9.29291 14.7928L11.5128 12.573L8.17695 14.4791Z'
                    />
                  </svg>
                  <div className='pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 animated-gradient-border px-[2px] py-[2px] rounded opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-200'>
                    <span className='block px-3 py-1 rounded bg-card shadow text-xs text-foreground'>
                      @dnlkandrii
                    </span>
                  </div>
                </div>
              </a>

              <a href='mailto:dnlkandrii@gmail.com' aria-label='Email' className='text-foreground'>
                <div className='relative flex items-center justify-center w-12 h-12 group'>
                  <svg
                    className={`h-10 w-10 relative z-10 animate-glow-pulse ${mailAnim}`}
                    onMouseEnter={() => {
                      setMailAnim('animate-mail-bounce');
                    }}
                    onMouseLeave={() => {
                      setMailAnim('');
                    }}
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='url(#mail-gradient)'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <defs>
                      <linearGradient id='mail-gradient' x1='0' y1='0' x2='1' y2='0'>
                        <stop offset='0%' stopColor='#FFE5B4'>
                          <animate
                            attributeName='stop-color'
                            values='#FFE5B4;#FFB26B;#FFA552;#FF7F5C;#FF5C57;#FFBB33;#FFD369;#FF9A8B;#FFD8A9;#FF8C61;#FFE5B4'
                            dur='3s'
                            begin='1s'
                            repeatCount='indefinite'
                          />
                        </stop>
                        <stop offset='100%' stopColor='#FF8C61'>
                          <animate
                            attributeName='stop-color'
                            values='#FF8C61;#FFE5B4;#FFB26B;#FFA552;#FF7F5C;#FF5C57;#FFBB33;#FFD369;#FF9A8B;#FFD8A9;#FF8C61'
                            dur='3s'
                            begin='1s'
                            repeatCount='indefinite'
                          />
                        </stop>
                      </linearGradient>
                    </defs>
                    <rect x='3' y='5' width='18' height='14' rx='2' />
                    <polyline points='3 7 12 13 21 7' />
                  </svg>
                  <div className='pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 animated-gradient-border px-[2px] py-[2px] rounded opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-200'>
                    <span className='block px-3 py-1 rounded bg-card shadow text-xs text-foreground'>
                      dnlkandrii@gmail.com
                    </span>
                  </div>
                </div>
              </a>

              <a href='tel:+380967974928' aria-label='Phone' className='text-foreground'>
                <div className='relative flex items-center justify-center w-12 h-12 group'>
                  <svg
                    className={`h-10 w-10 relative z-10 animate-glow-pulse ${phoneAnim}`}
                    onMouseEnter={() => {
                      setPhoneAnim('animate-phone-ring');
                    }}
                    onMouseLeave={() => {
                      setPhoneAnim('');
                    }}
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='url(#phone-gradient)'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <defs>
                      <linearGradient id='phone-gradient' x1='0' y1='0' x2='1' y2='0'>
                        <stop offset='0%' stopColor='#FFE5B4'>
                          <animate
                            attributeName='stop-color'
                            values='#FFE5B4;#FFB26B;#FFA552;#FF7F5C;#FF5C57;#FFBB33;#FFD369;#FF9A8B;#FFD8A9;#FF8C61;#FFE5B4'
                            dur='3s'
                            begin='2s'
                            repeatCount='indefinite'
                          />
                        </stop>
                        <stop offset='100%' stopColor='#FF8C61'>
                          <animate
                            attributeName='stop-color'
                            values='#FF8C61;#FFE5B4;#FFB26B;#FFA552;#FF7F5C;#FF5C57;#FFBB33;#FFD369;#FF9A8B;#FFD8A9;#FF8C61'
                            dur='3s'
                            begin='2s'
                            repeatCount='indefinite'
                          />
                        </stop>
                      </linearGradient>
                    </defs>
                    <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.13 1.05.37 2.07.73 3.06a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.02-1.02a2 2 0 0 1 2.11-.45c.99.36 2.01.6 3.06.73A2 2 0 0 1 22 16.92z' />
                  </svg>
                  <div className='pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 animated-gradient-border px-[2px] py-[2px] rounded opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-200'>
                    <span className='block px-3 py-1 rounded bg-card shadow text-xs text-foreground'>
                      +380967974928
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </CardContent>
        </GradientCard>
      </div>
    </section>
  );
}
