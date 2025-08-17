/**
 * Looks like this file is not required for local development.
 * Should test if it is required for remote.
 */

import type { PrismaConfig } from 'prisma';
import { PrismaD1 } from '@prisma/adapter-d1';

export default {
	experimental: {
		adapter: true,
	},
	schema: 'prisma/schema.prisma',
	async adapter() {
		return new PrismaD1({
			CLOUDFLARE_ACCOUNT_ID: process.env.CLOUDFLARE_ACCOUNT_ID!,
			CLOUDFLARE_DATABASE_ID: process.env.CLOUDFLARE_DATABASE_ID!,
			CLOUDFLARE_D1_TOKEN: process.env.CLOUDFLARE_D1_TOKEN!,
		});
	},
} satisfies PrismaConfig;
