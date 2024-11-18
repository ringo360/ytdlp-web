import { Hono } from 'hono';
import { serveStatic } from 'hono/bun';
import { logger} from 'hono/logger'
import api from './api';

const app = new Hono();
app.use(logger())

app.use('/files/*', serveStatic({ root: './' }));
app.use('/', serveStatic({ root: './html' }));

app.route('/v1', api);

export default app;
