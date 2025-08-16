import { Hono } from 'hono';
import BookService from '../services/book';
import BookRepository from '../repository/book';

const app = new Hono();
const repo = new BookRepository();
const bookService = new BookService(repo);

app.post('/', async (c) => {
	const { title } = await c.req.json();
	const book = await bookService.create(title);
	return c.json(book);
});

export default app;
