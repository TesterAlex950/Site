// SEO configuration for Vercel
export const seoConfig = {
  title: 'PPC & Media Buying Portfolio',
  description: 'The personal portfolio of a beginner-level PPC and media buying intern, showcasing skills and projects.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.vercel.app',
  image: '/og-image.jpg',
  type: 'website',
  twitter: {
    card: 'summary_large_image',
    site: '@your-twitter-handle',
  },
};

// Generate meta tags for pages
export const generateMetaTags = (customMeta?: Partial<typeof seoConfig>) => {
  const meta = { ...seoConfig, ...customMeta };
  
  return [
    { name: 'description', content: meta.description },
    { property: 'og:title', content: meta.title },
    { property: 'og:description', content: meta.description },
    { property: 'og:url', content: meta.url },
    { property: 'og:image', content: meta.image },
    { property: 'og:type', content: meta.type },
    { name: 'twitter:card', content: meta.twitter.card },
    { name: 'twitter:site', content: meta.twitter.site },
    { name: 'twitter:title', content: meta.title },
    { name: 'twitter:description', content: meta.description },
    { name: 'twitter:image', content: meta.image },
  ];
};

// Generate structured data
export const generateStructuredData = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Your Name',
    jobTitle: 'PPC & Media Buying Intern',
    description: seoConfig.description,
    url: seoConfig.url,
    sameAs: [
      'https://linkedin.com/in/your-profile',
      'https://github.com/your-username',
    ],
  };
}; 