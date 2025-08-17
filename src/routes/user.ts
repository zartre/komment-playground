import { Hono } from 'hono';
import { prisma } from '../repository/prisma';
import UserService from '../services/user';

const app = new Hono();
const service = new UserService(prisma);

app.post('/', async (c) => {
	const { name, email, bio } = await c.req.json();
	const user = await service.create(name, email, bio);
	return c.json(user);
});

export default app;
