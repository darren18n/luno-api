import cors from 'cors';
import helmet from 'helmet';

export default [
  cors(),
  helmet({
    ieNoOpen: false,
  }),
  helmet.frameguard({
    action: 'deny',
  }),
  helmet.contentSecurityPolicy(),
  helmet.referrerPolicy({
    policy: 'origin-when-cross-origin',
  }),
];