import { Hono } from 'hono';

const app = new Hono().post('/dl', async (c) => {
    const a = 'b';
    return c.json({
        beep: 'boop',
    });
});

export default app;
