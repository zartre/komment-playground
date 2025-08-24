import { DBError } from '../errors';
import { Book } from '../models/book';
import { BookRepository } from '../repository';

export default class BookService {
	private repo: BookRepository;

	constructor(repo: BookRepository) {
		this.repo = repo;
	}
	async create(name: string): Promise<Book> {
		try {
			const book: Book = { id: '1', title: name, author: 'Unknown' };
			return await this.repo.create(book);
		} catch (err) {
			if (err instanceof Error) {
				throw new DBError(`Failed to create book: ${err.message}`);
			}

			throw err;
		}
	}
}
