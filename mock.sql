create database library


CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(20) UNIQUE,
    email VARCHAR(40),
    password VARCHAR(14),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS books (
    id SERIAL PRIMARY KEY,
    title TEXT,
    author VARCHAR(20),
    publication_date DATE,
    genre VARCHAR(20),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS comments (
    id SERIAL PRIMARY KEY,
    text TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    book_id INT,
    user_id INT,
    FOREIGN KEY (book_id) REFERENCES books(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);


INSERT INTO users (username, email, password) VALUES
('user1', 'user1@example.com', 'password123'),
('user2', 'user2@example.com', 'password456'),
('user3', 'user3@example.com', 'password789'),
('user4', 'user4@example.com', 'password000');


INSERT INTO books (title, author, publication_date, genre, user_id) VALUES
('Book One', 'Author A', '2022-01-15', 'Fiction', 1),  
('Book Two', 'Author B', '2021-11-23', 'Non-Fiction', 2), 
('Book Three', 'Author C', '2020-05-10', 'Science Fiction', 3), 
('Book Four', 'Author D', '2019-08-25', 'Fantasy', 4); 


INSERT INTO comments (text, book_id, user_id) VALUES
('Book One was truly amazing!', 1, 1),  
('Book Two had some valuable insights.', 2, 2), 
('Book Three was a fantastic journey!', 3, 3),  
('Book Four was entertaining.', 4, 4);

UPDATE books
set title = 'Book Two', author = 'Author B', publication_date = '2021-11-23', genre = 'Non-Fiction', user_id = 2
where id = 2;
select * from books

select id from users
WHERE username = username and email = email and password = password

select id from books 
where title = $1 and where author = $2 and publication_date = $3 and genre = $4 and user_id = $5

INSERT INTO users (username, email, password) VALUES
('user5', 'user5@example.com', 'password123'),



select * 
from books
where id = $1



UPDATE books
set title = $1, 


DELETE FROM table_name WHERE condition;
