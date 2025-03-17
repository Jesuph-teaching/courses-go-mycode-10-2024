/*
 CREATE DATABASE gomycode
 */
use gomycode;
/* DROP TABLE book_author;
 DROP TABLE loan;
 DROP TABLE author;
 DROP TABLE book;
 DROP TABLE member; */
CREATE TABLE Author(
    author_id INT,
    name varchar(80),
    bio varchar(250)
);
ALTER TABLE Author
MODIFY author_id INT AUTO_INCREMENT PRIMARY KEY;
CREATE TABLE BOOK (
    _id INT AUTO_INCREMENT PRIMARY KEY,
    title varchar(150),
    publication_year INT CHECK(publication_year > 1800),
    publisher varchar(100)
);
CREATE TABLE BOOK_AUTHOR(
    book_id INT,
    author_id INT,
    PRIMARY KEY(book_id, author_id),
    FOREIGN KEY (book_id) REFERENCES BOOK(book_id),
    FOREIGN KEY (author_id) REFERENCES Author(author_id)
);
CREATE TABLE MEMBER(
    member_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name varchar(32) NOT NULL,
    last_name varchar(32) NOT NULL,
    membership_date Date DEFAULT sysdate(),
    email varchar(50) UNIQUE
);
CREATE TABLE LOAN(
    loan_id INT AUTO_INCREMENT PRIMARY KEY,
    member_id INT,
    book_id INT,
    created_at DATE,
    must_return_at Date,
    FOREIGN KEY(book_id) REFERENCES BOOK(_id),
    FOREIGN KEY(member_id) REFERENCES MEMBER(member_id)
);