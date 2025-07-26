// Vercel Analytics configuration
export const analytics = {
  // Enable Vercel Analytics
  enabled: process.env.NODE_ENV === 'production',
  
  // Google Analytics (optional)
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID,
  
  // Site URL
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
};

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && analytics.enabled) {
    // Vercel Analytics automatically tracks page views
    // You can add custom tracking here if needed
    console.log('Page view:', url);
  }
};

// Track custom events
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  if (typeof window !== 'undefined' && analytics.enabled) {
    // Add custom event tracking here
    console.log('Event:', eventName, properties);
  }
}; 