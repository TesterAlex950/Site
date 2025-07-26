// Image optimization configuration for Vercel
export const imageConfig = {
  // Default image settings
  default: {
    quality: 75,
    format: 'webp',
    sizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  
  // Avatar images
  avatar: {
    quality: 80,
    format: 'webp',
    sizes: [32, 64, 128, 256],
  },
  
  // Hero images
  hero: {
    quality: 85,
    format: 'webp',
    sizes: [1200, 1920, 2560],
  },
  
  // Thumbnail images
  thumbnail: {
    quality: 70,
    format: 'webp',
    sizes: [150, 300, 600],
  },
};

// Generate image URLs for Vercel
export const generateImageUrl = (
  src: string,
  width: number,
  quality: number = imageConfig.default.quality,
  format: string = imageConfig.default.format
) => {
  // For local images, use Next.js Image optimization
  if (src.startsWith('/')) {
    return `${src}?w=${width}&q=${quality}&f=${format}`;
  }
  
  // For external images, return as is
  return src;
};

// Image loading strategies
export const imageLoading = {
  // Lazy load for images below the fold
  lazy: 'lazy' as const,
  
  // Eager load for above the fold images
  eager: 'eager' as const,
};

// Image priority for above the fold images
export const imagePriority = {
  high: true,
  low: false,
};

// Generate responsive image sizes
export const generateSizes = (sizes: number[]) => {
  return sizes
    .map((size, index) => {
      if (index === sizes.length - 1) {
        return `${size}px`;
      }
      return `(max-width: ${size}px) ${size}px`;
    })
    .join(', ');
}; 