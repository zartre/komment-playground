import { Hono } from 'hono';
import pingHandler from './ping';

export const registerRoutes = (app: Hono<{ Bindings: Env }>) => {
	const routes = [
		{
			path: '/ping',
			handler: pingHandler,
		},
	];

	routes.forEach((route) => {
		app.route(route.path, route.handler);
	});
};
