export interface BookRepository {
	create(book: Book): Promise<Book>;
	// findById(id: string): Promise<Book | null>;
	// findAll(): Promise<Book[]>;
	// update(id: string, book: Partial<Book>): Promise<Book | null>;
	// delete(id: string): Promise<boolean>;
}
