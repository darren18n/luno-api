import cors from 'cors';
import helmet from 'helmet';

const contentSecurityPolicy = {
  directives: {
    defaultSrc: ["'none'"],
    baseUri: ["'self'", 'https://d6tizftlrpuof.cloudfront.net'],
    blockAllMixedContent: null,
    childSrc: ["'self'", 'https://vars.hotjar.com'],
    connectSrc: ["'self'"],
    fontSrc: ["'self'", 'data:', 'https://d6tizftlrpuof.cloudfront.net', 'https://fonts.gstatic.com'],
    formAction: ["'self'"],
    frameAncestors: ["'self'"],
    frameSrc: ["'self'"],
    imgSrc: [
      "'self'",
      'data:',
      'www.google-analytics.com',
      'stats.g.doubleclick.net',
      'googleads.g.doubleclick.net',
      'https://www.google.com',
      'https://www.google.co.za',
    ],
    mediaSrc: ["'none'"],
    objectSrc: ["'self'", 'blob:'],
    pluginTypes: ['application/pdf'],
    scriptSrc: [
      "'self'",
      "'unsafe-eval'",
      "'unsafe-inline'",
      'www.google-analytics.com',
      'www.googletagmanager.com',
      'www.googleadservices.com',
      'https://googleads.g.doubleclick.net'
    ],

    styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
  },
};

export default [
  cors(),
  helmet({
    ieNoOpen: false,
  }),
  helmet.frameguard({
    action: 'deny',
  }),
  helmet.contentSecurityPolicy(contentSecurityPolicy),
  helmet.referrerPolicy({
    policy: 'origin-when-cross-origin',
  }),
];