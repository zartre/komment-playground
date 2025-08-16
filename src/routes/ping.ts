import { Hono } from 'hono';
import { PingService } from '../services/ping';

const app = new Hono();
const service = new PingService();

app.get('/', async (c) => {
	let result = service.ping();
	return c.text(result);
});

export default app;
