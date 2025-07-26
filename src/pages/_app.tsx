import { Toaster } from '@/components/ui/toaster';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable}`}>
      <Head>
        <title>PPC & Media Buying Portfolio</title>
        <meta
          name='description'
          content='The personal portfolio of a beginner-level PPC and media buying intern, showcasing skills and projects.'
        />
        <meta property='og:title' content='PPC & Media Buying Portfolio' />
        <meta
          property='og:description'
          content='The personal portfolio of a beginner-level PPC and media buying intern, showcasing skills and projects.'
        />
        <meta property='og:type' content='website' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='PPC & Media Buying Portfolio' />
        <meta
          name='twitter:description'
          content='The personal portfolio of a beginner-level PPC and media buying intern, showcasing skills and projects.'
        />
      </Head>
      <Component {...pageProps} />
      <Toaster />
      <SpeedInsights />
    </div>
  );
}
