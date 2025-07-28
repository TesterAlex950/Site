import { FadeIn } from '@/components/common/FadeIn';
import { GradientCard } from '../common/GradientCard';
import { CardContent } from '../ui/card';

export function AboutSection() {
  return (
    <section id='about' className='w-full py-16 md:py-24 lg:py-32'>
      <FadeIn>
        <div className='container mx-auto px-4 md:px-6'>
          <GradientCard className='max-w-3xl mx-auto bg-card/70 backdrop-blur-sm shadow-lg shadow-primary/10'>
            <CardContent className='p-8 md:p-12 lg:p-16'>
              <div className='grid gap-10'>
                <div className='flex flex-col justify-center items-center space-y-4 text-center'>
                  <div className='space-y-2'>
                    <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl font-headline mb-6 drop-shadow-lg font-sans'>
                      Who am I?
                    </h2>
                    <p className='max-w-[600px] text-muted-foreground md:text-2xl/relaxed lg:text-xl/relaxed xl:text-2xl/relaxed font-semibold drop-shadow-md font-sans mb-2 px-2'>
                      I'm someone who values curiosity, clarity. I enjoy learning how things
                      function — whether it's systems, people, or ideas — and turning that
                      understanding into something useful. I’m always learning, growing, and
                      occasionally Googling things I probably should already know. In the end, I
                      just like doing good work with good people
                    </p>
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
