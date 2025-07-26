// Testing configuration for Vercel
export const testingConfig = {
  // Unit testing
  unit: {
    framework: 'jest',
    coverage: {
      enabled: true,
      threshold: 80,
      reporters: ['text', 'lcov', 'html'],
    },
  },
  
  // Integration testing
  integration: {
    framework: 'playwright',
    browsers: ['chromium', 'firefox', 'webkit'],
    viewports: [
      { width: 1280, height: 720 },
      { width: 768, height: 1024 },
      { width: 375, height: 667 },
    ],
  },
  
  // E2E testing
  e2e: {
    framework: 'cypress',
    baseUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    video: true,
    screenshots: true,
  },
};

// Test utilities
export const testUtils = {
  // Mock data
  mockData: {
    user: {
      name: 'Test User',
      email: 'test@example.com',
      message: 'Test message',
    },
    
    portfolio: {
      title: 'Test Portfolio',
      description: 'Test description',
      skills: ['JavaScript', 'React', 'Next.js'],
    },
  },
  
  // Test helpers
  helpers: {
    // Wait for element to be visible
    waitForElement: (selector: string, timeout: number = 5000) => {
      return new Promise((resolve) => {
        const element = document.querySelector(selector);
        if (element) {
          resolve(element);
        } else {
          setTimeout(() => {
            resolve(testUtils.helpers.waitForElement(selector, timeout - 100));
          }, 100);
        }
      });
    },
    
    // Mock API response
    mockApiResponse: (url: string, response: any) => {
      return {
        url,
        response,
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      };
    },
  },
};

// Performance testing
export const performanceTests = {
  // Lighthouse CI configuration
  lighthouse: {
    ci: {
      collect: {
        url: ['http://localhost:3000'],
        numberOfRuns: 3,
      },
      assert: {
        assertions: {
          'categories:performance': ['warn', { minScore: 0.8 }],
          'categories:accessibility': ['error', { minScore: 0.9 }],
          'categories:best-practices': ['warn', { minScore: 0.8 }],
          'categories:seo': ['warn', { minScore: 0.8 }],
        },
      },
      upload: {
        target: 'temporary-public-storage',
      },
    },
  },
  
  // Web Vitals testing
  webVitals: {
    metrics: ['FCP', 'LCP', 'CLS', 'FID', 'TTFB'],
    thresholds: {
      FCP: 1800,
      LCP: 2500,
      CLS: 0.1,
      FID: 100,
      TTFB: 800,
    },
  },
}; 