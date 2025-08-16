export default class BookRepository implements BookRepository {
	create(book: Book): Promise<Book> {
		return Promise.resolve(book);
	}
}
