/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 *
 * https://dev.to/lovestaco/how-to-integrate-github-sign-in-a-four-step-guide-1doj
 *
 * https://developers.cloudflare.com/d1/tutorials/build-a-comments-api/
 */

import { Hono } from 'hono';
import { registerRoutes } from './routes';

const app = new Hono<{ Bindings: Env }>();

registerRoutes(app);

export default app;
