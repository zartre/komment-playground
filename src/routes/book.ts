import { Hono } from 'hono';
import { HTTPException } from 'hono/http-exception';
import { ContentfulStatusCode } from 'hono/utils/http-status';
import { DBError, ValidationError } from '../errors';
import BookRepository from '../repository/book';
import BookService from '../services/book';

const app = new Hono();
const repo = new BookRepository();
const bookService = new BookService(repo);

app.post('/', async (c) => {
	try {
		const { title } = await c.req.json();
		const book = await bookService.create(title);
		return c.json(book);
	} catch (err) {
		let errCode: ContentfulStatusCode = 500;

		if (err instanceof ValidationError) {
			errCode = 400;
		} else if (err instanceof DBError) {
			errCode = 500;
		}

		if (err instanceof Error) throw new HTTPException(errCode, { cause: err.name, message: err.message });

		throw err;
	}
});

export default app;
