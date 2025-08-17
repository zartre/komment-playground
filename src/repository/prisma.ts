import { PrismaD1 } from '@prisma/adapter-d1';
import { PrismaClient } from '../../generated/prisma/client';
import { env } from 'cloudflare:workers';

const adapter = new PrismaD1(env.DB);
export const prisma = new PrismaClient({ adapter });
