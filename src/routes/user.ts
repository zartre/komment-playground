import { Hono } from 'hono';
import { HTTPException } from 'hono/http-exception';
import { DBError, ValidationError } from '../errors';
import { prisma } from '../repository/prisma';
import UserService from '../services/user';

const app = new Hono();
const service = new UserService(prisma);

app.post('/', async (c) => {
	try {
		const { name, email, bio } = await c.req.json();
		const user = await service.create(name, email, bio);

		return c.json(user);
	} catch (err) {
		if (err instanceof ValidationError) {
			throw new HTTPException(400, { cause: err.name, message: err.message });
		} else if (err instanceof DBError) {
			throw new HTTPException(500, { message: err.message });
		}

		throw err;
	}
});

export default app;
