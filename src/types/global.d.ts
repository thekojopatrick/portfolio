// Global type declarations for third-party scripts

// Declare rybbit on window for TypeScript
  interface Window {
    rybbit?: {
      event: (eventName: string, eventData?: Record<string, any>) => void;
      pageview: () => void;
      // Add other methods if you use them
    };
  }
