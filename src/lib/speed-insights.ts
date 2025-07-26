// Vercel Speed Insights configuration
export const speedInsights = {
  // Enable Speed Insights in production
  enabled: process.env.NODE_ENV === 'production',
  
  // Custom configuration
  config: {
    // Sample rate (0-1)
    sampleRate: 1,
    
    // Enable web vitals tracking
    webVitals: true,
  },
};

// Track custom performance metrics
export const trackPerformance = (metric: string, value: number) => {
  if (typeof window !== 'undefined' && speedInsights.enabled) {
    // Add custom performance tracking here
    console.log('Performance metric:', metric, value);
  }
}; 