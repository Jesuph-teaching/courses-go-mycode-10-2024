INSERT INTO book(publication_year, title, publisher)
VALUES(1949, '1984', 'Secker & Warburg');
/* SELECT *
 FROM book
 WHERE book_id > 1; */
/* DELETE FROM book
 WHERE book_id = 2; */
/* INSERT INTO Author (name, bio)
 VALUES (
 'F. Scott Fitzgerald',
 'American novelist known for The Great Gatsby'
 ),
 (
 'George Orwell',
 'English novelist, essayist, journalist, and critic'
 ); */
/* INSERT INTO Book_Author (book_id, author_id)
 VALUES (1, 1),
 (3, 2); */
/* UPDATE book
 SET publisher = 'Secker and Warburg'
 WHERE book_id = 3; */
SELECT book.book_id,
    book.title,
    book.publication_year,
    book.publisher,
    author.author_id,
    author.bio,
    author.name
FROM book
    JOIN book_author ON book.book_id = book_author.book_id
    JOIN author ON book_author.author_id = author.author_id;