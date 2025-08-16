import { Hono } from 'hono';
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
	routes.forEach((route) => {
		app.route(route.path, route.handler);
	});
};
