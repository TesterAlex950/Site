// Vercel caching configuration
export const cacheConfig = {
  // Static assets cache
  static: {
    maxAge: 31536000, // 1 year
    staleWhileRevalidate: 86400, // 1 day
  },
  
  // API routes cache
  api: {
    maxAge: 3600, // 1 hour
    staleWhileRevalidate: 300, // 5 minutes
  },
  
  // Page cache
  page: {
    maxAge: 86400, // 1 day
    staleWhileRevalidate: 3600, // 1 hour
  },
};

// Generate cache headers for Vercel
export const generateCacheHeaders = (type: keyof typeof cacheConfig) => {
  const config = cacheConfig[type];
  return {
    'Cache-Control': `public, max-age=${config.maxAge}, stale-while-revalidate=${config.staleWhileRevalidate}`,
  };
};

// Cache control for different content types
export const cacheControl = {
  // Static assets (images, fonts, etc.)
  static: generateCacheHeaders('static'),
  
  // API responses
  api: generateCacheHeaders('api'),
  
  // HTML pages
  page: generateCacheHeaders('page'),
  
  // No cache
  noCache: {
    'Cache-Control': 'no-cache, no-store, must-revalidate',
  },
}; 