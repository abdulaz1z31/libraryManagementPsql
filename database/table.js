import pool from "./database.js";

export const createTables = async () => {
  try {
    const tables = [
        `CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(20) UNIQUE,
            email VARCHAR(40),
            password VARCHAR(14),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`,
        `CREATE TABLE IF NOT EXISTS books (
            id SERIAL PRIMARY KEY,
            title TEXT,
            author VARCHAR(20),
            publication_date DATE,
            genre VARCHAR(20),
            user_id INT,
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
        )`,
        `CREATE TABLE IF NOT EXISTS comments (
            id SERIAL PRIMARY KEY,
            text TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            book_id INT,
            user_id INT,
            FOREIGN KEY (book_id) REFERENCES books(id) ON DELETE CASCADE,
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
        )`,
    ];

    for (let table of tables) {
      await pool.query(table);
    }
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
