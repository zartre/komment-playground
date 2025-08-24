import { Hono } from 'hono';
import { HTTPException } from 'hono/http-exception';
import bookHandler from './book';
import pingHandler from './ping';

interface Route {
	path: string;
	handler: Hono;
}

const routes: Route[] = [
	{
		path: '/books',
		handler: bookHandler,
	},
	{
		path: '/ping',
		handler: pingHandler,
	},
];

export const registerRoutes = (app: Hono<{ Bindings: Env }>) => {
	app.onError((err, c) => {
		if (err instanceof HTTPException) {
			console.error(err);
			return c.json({ error: err.message }, err.status);
		}
		console.error('Unhandled error:', err);
		return c.json({ error: 'Internal Server Error' }, 500);
	});

	routes.forEach((route) => {
		app.route(route.path, route.handler);
	});
};
