import { Prisma, PrismaClient, User } from '../../generated/prisma';
import { DBError, ValidationError } from '../errors';

export default class UserService {
	private prisma: PrismaClient;

	constructor(prisma: PrismaClient) {
		this.prisma = prisma;
	}

	async create(name: string, email: string, bio: string): Promise<User> {
		try {
			const user = await this.prisma.user.create({
				data: {
					name,
					email,
					posts: {
						create: { title: 'Hello World' },
					},
					profile: {
						create: { bio },
					},
				},
			});

			return user;
		} catch (err) {
			if (err instanceof Prisma.PrismaClientKnownRequestError) {
				if (err.code === 'P2002') {
					throw new ValidationError('Email already exists');
				}

				throw new DBError(err.message);
			}

			throw err;
		}
	}
}
