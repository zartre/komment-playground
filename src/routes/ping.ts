import { Hono } from 'hono';
import { PingService } from '../services/ping';

const app = new Hono();
const controller = new PingService();

app.get('/', async (c) => {
	let result = controller.ping();
	return c.text(result);
});

export default app;
