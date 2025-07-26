// Redirect configuration for Vercel
export const redirects = [
  // Redirect old URLs to new ones
  {
    source: '/old-portfolio',
    destination: '/',
    permanent: true,
  },
  
  // Redirect www to non-www
  {
    source: '/:path*',
    has: [
      {
        type: 'host',
        value: 'www.your-domain.vercel.app',
      },
    ],
    destination: 'https://your-domain.vercel.app/:path*',
    permanent: true,
  },
  
  // Redirect HTTP to HTTPS
  {
    source: '/:path*',
    has: [
      {
        type: 'header',
        key: 'x-forwarded-proto',
        value: 'http',
      },
    ],
    destination: 'https://your-domain.vercel.app/:path*',
    permanent: true,
  },
];

// Generate Vercel redirects configuration
export const generateVercelRedirects = () => {
  return redirects.map(redirect => ({
    source: redirect.source,
    destination: redirect.destination,
    permanent: redirect.permanent,
  }));
}; 