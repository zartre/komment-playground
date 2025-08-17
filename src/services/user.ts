import { PrismaClient } from '@prisma/client';

export default class UserService {
	private prisma: PrismaClient;

	constructor(prisma: PrismaClient) {
		this.prisma = prisma;
	}

	async create(name: string, email: string, bio: string) {
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
	}
}
