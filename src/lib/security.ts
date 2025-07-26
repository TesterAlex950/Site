// Security configuration for Vercel
export const securityConfig = {
  // Content Security Policy
  csp: {
    'default-src': ["'self'"],
    'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'", 'https://vercel.live'],
    'style-src': ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
    'font-src': ["'self'", 'https://fonts.gstatic.com'],
    'img-src': ["'self'", 'data:', 'https:', 'blob:'],
    'connect-src': ["'self'", 'https://vercel.live', 'https://api.vercel.com'],
    'frame-src': ["'none'"],
    'object-src': ["'none'"],
    'base-uri': ["'self'"],
    'form-action': ["'self'"],
  },
  
  // Security headers
  headers: {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  },
};

// Generate CSP string
export const generateCSP = () => {
  const csp = securityConfig.csp;
  return Object.entries(csp)
    .map(([key, values]) => `${key} ${values.join(' ')}`)
    .join('; ');
};

// Security middleware for API routes
export const securityMiddleware = (handler: any) => {
  return (req: any, res: any) => {
    // Add security headers
    Object.entries(securityConfig.headers).forEach(([key, value]) => {
      res.setHeader(key, value);
    });
    
    // Add CSP header
    res.setHeader('Content-Security-Policy', generateCSP());
    
    return handler(req, res);
  };
}; 