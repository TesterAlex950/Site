// Internationalization configuration for Vercel
export const i18nConfig = {
  // Default locale
  defaultLocale: 'en',
  
  // Supported locales
  locales: ['en', 'uk'],
  
  // Locale detection
  localeDetection: true,
  
  // Domain-based locale detection
  domains: [
    {
      domain: 'your-domain.vercel.app',
      defaultLocale: 'en',
    },
    {
      domain: 'your-domain-uk.vercel.app',
      defaultLocale: 'uk',
    },
  ],
};

// Translation keys
export const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      contact: 'Contact',
    },
    
    // Hero section
    hero: {
      title: 'PPC & Media Buying Portfolio',
      subtitle: 'Personal portfolio showcasing skills and projects',
      cta: 'Get in touch',
    },
    
    // About section
    about: {
      title: 'About Me',
      description: 'I am a beginner-level PPC and media buying intern...',
    },
    
    // Skills section
    skills: {
      title: 'Skills',
      description: 'My technical and professional skills',
    },
    
    // Contact section
    contact: {
      title: 'Contact',
      description: 'Get in touch with me',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        submit: 'Send Message',
      },
    },
  },
  
  uk: {
    // Navigation
    nav: {
      home: 'Головна',
      about: 'Про мене',
      skills: 'Навички',
      contact: 'Контакти',
    },
    
    // Hero section
    hero: {
      title: 'Портфоліо PPC та Media Buying',
      subtitle: 'Особисте портфоліо, що демонструє навички та проекти',
      cta: 'Зв\'язатися',
    },
    
    // About section
    about: {
      title: 'Про мене',
      description: 'Я стажер початкового рівня в PPC та media buying...',
    },
    
    // Skills section
    skills: {
      title: 'Навички',
      description: 'Мої технічні та професійні навички',
    },
    
    // Contact section
    contact: {
      title: 'Контакти',
      description: 'Зв\'яжіться зі мною',
      form: {
        name: 'Ім\'я',
        email: 'Email',
        message: 'Повідомлення',
        submit: 'Надіслати',
      },
    },
  },
};

// Get translation for current locale
export const getTranslation = (locale: string, key: string) => {
  const keys = key.split('.');
  let value: any = translations[locale as keyof typeof translations] || translations.en;
  
  for (const k of keys) {
    value = value?.[k];
    if (!value) break;
  }
  
  return value || key;
};

// Format date for locale
export const formatDate = (date: Date, locale: string) => {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
};

// Format number for locale
export const formatNumber = (number: number, locale: string) => {
  return new Intl.NumberFormat(locale).format(number);
}; 