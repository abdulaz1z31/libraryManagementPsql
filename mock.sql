create database library


CREATE TABLE IF NOT EXISTS users (
    id serial PRIMARY KEY,
    username VARCHAR(20) UNIQUE,
    email varchar(40),
    password varchar(14),
    created_at DATE
);

CREATE TABLE IF NOT EXISTS books (
    id serial PRIMARY KEY,
    title text,
    author varchar(20),
    publication_date date,
    genre varchar(20),
    user_id int,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS comments (
    id serial PRIMARY KEY,
    text text,
    created_at date,
    book_id int,
    user_id int,
    FOREIGN KEY (book_id) REFERENCES books(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS photos (
    id serial PRIMARY KEY,
    url text,
    book_id int,
    uploaded_at date,
    FOREIGN KEY (book_id) REFERENCES books(id)
);
