import { Hono } from 'hono';
import pingService from '../services/ping';

const app = new Hono();
const service = new pingService();

app.get('/', async (c) => {
	let result = service.ping();
	return c.text(result);
});

export default app;
