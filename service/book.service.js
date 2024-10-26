import pool from "../database/database.js";

export const insertBook = async (bookData, user_id) => {
  try {
    const { title, author, publication_date, genre } = bookData;

    await pool.query(
      `
        INSERT INTO books (title, author, publication_date, genre, user_id) VALUES
        ($1, $2, $3, $4, $5);
        `,
      [title, author, publication_date, genre, user_id]
    );

    return { success: true };
  } catch (err) {
    return { success: false, err };
  }
};

export const getByIdBook = async function (bookId) {
  try {
    const data = await pool.query(`select * from books where id = $1`, [
      bookId,
    ]);
    if (data.rows.length > 0) {
      return { found: true, data: data.rows[0] };
    } else {
      return { found: true, data: "Id not found" };
    }
  } catch (err) {
    return { found: true, err };
  }
};

export const updateBook = async function (bookId, bookData) {
  try {
    const { title, author, publication_date, genre, user_id } = bookData;

    await pool.query(
      `
        UPDATE books
        set title = $1, author = $2, publication_date = $3, genre = $4, user_id = $5
        where id = $6
        `,
      [title, author, publication_date, genre, user_id, bookId]
    );

    return { success: true };
  } catch (err) {
    return { success: false, err };
  }
};

export const checkIfIdExists = async (id) => {
  try {
    const result = await pool.query(`SELECT id FROM users WHERE id = $1`, [id]);

    if (result.rows > 0) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Xato yuz berdi:", error);
    throw error;
  }
};

export const checkIfIdExistsBooks = async (id) => {
  try {
    const result = await pool.query(`SELECT id FROM books WHERE id = $1`, [id]);
    
    if (result.rows.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Xato yuz berdi:", error);
    throw new Error(error);
  }
};

export const deleteBook = async (bookId) => {
  try {
    const check = await checkIfIdExistsBooks(bookId);
   
    
    if (!check) {
      return {success:false, err:"no"};
    } else {
      const a = await pool.query(
        `
        DELETE FROM books WHERE id = $1;
        `,
        [bookId]
      );
      return {success: true, err:"yes"}
    }
  } catch (err) {
    return {success: false, error1:err}
  }
};

export const validationBookForUniq = async (bookData) => {
  const { title, author, publication_date, genre, user_id } = bookData;

  const result = await pool.query(
    `
              select id from books 
              where title = $1 and author = $2 and publication_date = $3 and genre = $4 and user_id = $5
              `,
    [title, author, publication_date, genre, user_id]
  );

  if (result.rows.length > 0) {
    return true;
  } else {
    return false;
  }
};
