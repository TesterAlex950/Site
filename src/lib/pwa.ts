// PWA configuration for Vercel
export const pwaConfig = {
  name: 'PPC & Media Buying Portfolio',
  shortName: 'Portfolio',
  description: 'Personal portfolio showcasing PPC and media buying skills',
  themeColor: '#000000',
  backgroundColor: '#ffffff',
  display: 'standalone',
  orientation: 'portrait',
  scope: '/',
  startUrl: '/',
  icons: [
    {
      src: '/icons/icon-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      src: '/icons/icon-512x512.png',
      sizes: '512x512',
      type: 'image/png',
    },
    {
      src: '/icons/icon-192x192.png',
      sizes: '192x192',
      type: 'image/png',
      purpose: 'maskable',
    },
  ],
  screenshots: [
    {
      src: '/screenshots/desktop.png',
      sizes: '1280x720',
      type: 'image/png',
      formFactor: 'wide',
    },
    {
      src: '/screenshots/mobile.png',
      sizes: '390x844',
      type: 'image/png',
      formFactor: 'narrow',
    },
  ],
  categories: ['business', 'productivity'],
  lang: 'en',
  dir: 'ltr',
};

// Generate manifest.json content
export const generateManifest = () => {
  return {
    name: pwaConfig.name,
    short_name: pwaConfig.shortName,
    description: pwaConfig.description,
    theme_color: pwaConfig.themeColor,
    background_color: pwaConfig.backgroundColor,
    display: pwaConfig.display,
    orientation: pwaConfig.orientation,
    scope: pwaConfig.scope,
    start_url: pwaConfig.startUrl,
    icons: pwaConfig.icons,
    screenshots: pwaConfig.screenshots,
    categories: pwaConfig.categories,
    lang: pwaConfig.lang,
    dir: pwaConfig.dir,
  };
};

// Service Worker configuration
export const swConfig = {
  // Cache strategies
  cacheStrategies: {
    // Cache static assets
    static: 'cache-first',
    
    // Cache API responses
    api: 'network-first',
    
    // Cache HTML pages
    pages: 'network-first',
  },
  
  // Cache names
  cacheNames: {
    static: 'static-cache-v1',
    api: 'api-cache-v1',
    pages: 'pages-cache-v1',
  },
  
  // Cache expiration
  cacheExpiration: {
    static: 30 * 24 * 60 * 60 * 1000, // 30 days
    api: 60 * 60 * 1000, // 1 hour
    pages: 24 * 60 * 60 * 1000, // 1 day
  },
}; 