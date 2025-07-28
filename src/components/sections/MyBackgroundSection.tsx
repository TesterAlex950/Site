'use client';

import { FadeIn } from '@/components/common/FadeIn';
import { useState } from 'react';
import { GradientCard } from '../common/GradientCard';
import { CardContent } from '../ui/card';

export function MyBackgroundSection() {
  return (
    <section id='background' className='w-full py-16 md:py-24 lg:py-32'>
      <FadeIn>
        <div className='container mx-auto px-4 md:px-6'>
          <GradientCard className='max-w-3xl mx-auto bg-card/70 backdrop-blur-sm shadow-lg shadow-primary/10'>
            <CardContent className='p-8 md:p-12 lg:p-16'>
              <div className='grid gap-10'>
                <div className='flex flex-col justify-center items-center space-y-4 text-center'>
                  <div className='space-y-2 w-full'>
                    <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl font-headline mb-12 drop-shadow-lg font-sans'>
                      My Background
                    </h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 justify-items-center mb-10'>
                      <div className='relative flex flex-col items-center rounded-xl border border-muted/40 bg-card px-4 py-4 group shadow-lg transition-all w-full max-w-64 h-64 hover:-translate-y-2 hover:shadow-2xl hover:z-10'>
                        <div
                          className='pointer-events-none absolute inset-0 z-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300'
                          style={{ boxShadow: '0 0 32px 8px #2563eb55' }}
                        />
                        <img
                          src='KPI_shield.svg'
                          alt='KPI'
                          className='h-16 w-auto grayscale group-hover:grayscale-0 transition duration-300'
                        />
                        <span className='mt-2 text-xs text-muted-foreground font-semibold drop-shadow-sm font-sans mb-1'>
                          KPI
                        </span>
                        <span
                          className='mt-1 text-xs text-muted-foreground block max-w-[180px] text-justify font-medium drop-shadow-sm font-sans mb-2 px-1'
                          style={{ textAlignLast: 'left' }}
                        >
                          This is my home university, where I have already studied for five years
                          and continue my education. It has given me a strong technical foundation,
                          a passion for technology, and the principles of a structured approach to
                          problem-solving.
                        </span>
                      </div>
                      <div className='relative flex flex-col items-center rounded-xl border border-muted/40 bg-card px-4 py-4 group shadow-lg transition-all w-full max-w-64 h-64 hover:-translate-y-2 hover:shadow-2xl hover:z-10'>
                        <div
                          className='pointer-events-none absolute inset-0 z-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300'
                          style={{ boxShadow: '0 0 32px 8px #b91c1c55' }}
                        />
                        <img
                          src='lawknu-logo.svg'
                          alt='KNU'
                          className='h-16 w-auto grayscale group-hover:grayscale-0 transition duration-300'
                        />
                        <span className='mt-2 text-xs text-muted-foreground font-semibold drop-shadow-sm font-sans mb-1'>
                          KNU
                        </span>
                        <span
                          className='mt-1 text-xs text-muted-foreground block max-w-[180px] text-justify font-medium drop-shadow-sm font-sans mb-2 px-1'
                          style={{ textAlignLast: 'left' }}
                        >
                          Studying at this university is a symbol of victory for me — a confirmation
                          of the saying that it's never too late to learn and become better.
                        </span>
                      </div>
                      <div className='col-span-1 md:col-span-2 flex justify-center mt-10'>
                        <div className='relative flex flex-col items-start rounded-xl border border-muted/40 bg-card px-6 py-6 group shadow-lg transition-all w-full max-w-2xl hover:-translate-y-2 hover:shadow-2xl hover:z-10'>
                          <div
                            className='pointer-events-none absolute inset-0 z-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300'
                            style={{ boxShadow: '0 0 32px 8px #a21caf55' }}
                          />
                          <span
                            className='mt-1 text-xs text-muted-foreground block text-sm text-justify font-medium drop-shadow-sm font-sans mb-2 px-1'
                            style={{ textAlignLast: 'left' }}
                          >
                            My interest in marketing started at university, when I took a course on
                            startups and completed a program by Genesis about marketing basics and
                            key metrics. This experience encouraged me to study marketing further on
                            my own. Since then, I have regularly taken courses and read professional
                            resources. For example, I completed a course by <PopoverCertificate />.
                            Marketing is now a field in which I continue to develop and see my
                            professional future.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </GradientCard>
        </div>
      </FadeIn>
    </section>
  );
}

// Popover for certificate preview
function PopoverCertificate() {
  const [show, setShow] = useState(false);
  return (
    <span
      className='relative inline-block align-baseline'
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <span className='font-bold text-[#a21caf] cursor-pointer'>Skelar</span>
      {show && (
        <span className='absolute left-1/2 z-20 mt-2 w-64 -translate-x-1/2 rounded-lg shadow-xl bg-transparent p-2 animate-fade-in'>
          <img
            src='Andrii.jpg'
            alt='Certificate preview'
            className='w-full h-auto rounded transition-all duration-300 opacity-0 scale-95 animate-certificate-fade-in'
            style={{ maxHeight: '320px', objectFit: 'contain' }}
          />
        </span>
      )}
    </span>
  );
}
