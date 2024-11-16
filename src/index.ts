import { Hono } from 'hono';
import { serveStatic } from 'hono/bun';
import api from './api';

const app = new Hono();

app.use('/files/*', serveStatic({ root: './' }));
app.use('/', serveStatic({ root: './' }));

app.route('/v1', api);

export default app;
