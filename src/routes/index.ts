import { Hono } from 'hono';
import bookHandler from './book';
import pingHandler from './ping';

export const registerRoutes = (app: Hono<{ Bindings: Env }>) => {
	const routes = [
		{
			path: '/ping',
			handler: pingHandler,
		},
		{
			path: '/books',
			handler: bookHandler,
		},
	];

	routes.forEach((route) => {
		app.route(route.path, route.handler);
	});
};
