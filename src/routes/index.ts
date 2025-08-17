import { Hono } from 'hono';
import bookHandler from './book';
import pingHandler from './ping';
import userHandler from './user';

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
	{
		path: '/users',
		handler: userHandler,
	},
];

export const registerRoutes = (app: Hono<{ Bindings: Env }>) => {
	routes.forEach((route) => {
		app.route(route.path, route.handler);
	});
};
