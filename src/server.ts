import express, { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import securityMiddleware from '@middleware/security';
import pollingService from '@services/polling-service';


const app = express();
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(securityMiddleware);

const server = app.listen(port, () => {
  console.log(
    "[%s] Listening on http://localhost:%d",
    process.env.NODE_ENV,
    port
  );
})

app.get('/ping', (_: Request, res: Response) => res.status(StatusCodes.OK).send('pong'));

let tick = 0;

const cb = () => {
  tick++;
  console.log(`Tick ===> ${tick}`)
};

pollingService.start(cb)

process.on('SIGTERM', () => {
  console.debug('SIGTERM signal received: closing HTTP server')
  server.close(() => {
    console.debug('HTTP server closed')
  })
})

