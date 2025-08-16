import { Hono } from 'hono';
import bookHandler from './book';
import pingHandler from './ping';

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

export const registerRoutes = (app: Hono<{ Bindings: Env }>) => {
	routes.forEach((route) => {
		app.route(route.path, route.handler);
	});
};
