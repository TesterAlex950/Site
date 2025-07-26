// Monitoring configuration for Vercel
export const monitoringConfig = {
  // Error tracking
  errorTracking: {
    enabled: process.env.NODE_ENV === 'production',
    sampleRate: 1.0,
  },
  
  // Performance monitoring
  performance: {
    enabled: process.env.NODE_ENV === 'production',
    webVitals: true,
  },
  
  // User analytics
  analytics: {
    enabled: process.env.NODE_ENV === 'production',
    trackPageViews: true,
    trackEvents: true,
  },
};

// Error boundary for React components
export const errorHandler = (error: Error, errorInfo: any) => {
  if (monitoringConfig.errorTracking.enabled) {
    // Log error to Vercel monitoring
    console.error('Error caught by boundary:', error, errorInfo);
    
    // You can send to external service here
    // Example: Sentry, LogRocket, etc.
  }
};

// Performance monitoring
export const trackWebVitals = (metric: any) => {
  if (monitoringConfig.performance.enabled) {
    // Vercel automatically tracks Web Vitals
    console.log('Web Vital:', metric);
    
    // Send to analytics service
    if (metric.name === 'FCP') {
      // First Contentful Paint
      console.log('FCP:', metric.value);
    } else if (metric.name === 'LCP') {
      // Largest Contentful Paint
      console.log('LCP:', metric.value);
    } else if (metric.name === 'CLS') {
      // Cumulative Layout Shift
      console.log('CLS:', metric.value);
    }
  }
};

// Custom event tracking
export const trackCustomEvent = (eventName: string, properties?: Record<string, any>) => {
  if (monitoringConfig.analytics.enabled) {
    // Track custom events
    console.log('Custom event:', eventName, properties);
    
    // Send to analytics service
    // Example: Google Analytics, Mixpanel, etc.
  }
}; 