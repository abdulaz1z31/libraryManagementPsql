import pool from "../database/database.js";
const lastLoginedUserId = -1
// export const checkUserFromTable = async function (userData) {
//   try {
//     const { username, email, password } = userData;
//     const result = pool.query(
//        `select id
//         from users
//         WHERE username = $1 and email = $2 and password = $3
//        `,
//       [username, email, password]
//     );
//     if (result.rows.length > 0) {
//         return { found: true, userId: result.rows[0].id };
//     } else {
//         return { found: false, userId: null };
//     }
//   } catch (err) {
//     return {found: false, err}
//   }
// };

export const addNewUserToTable = async function (userData) {
  try {
    const { username, email, password } = userData;
    await pool.query(
      `INSERT INTO users (username, email, password) 
           VALUES ($1, $2, $3)`,
      [username, email, password]
    );

    return { success: true };
  } catch (err) {
    return { success: false, err };
  }
};

export const loginUserToSystem = async function (username, password) {
  const result = pool.query(
    `select id
                from users
                WHERE username = $1 and password = $2
               `,
    [username, password]
  );
  if (result.rows.length > 0) {
    lastLoginedUserId = result.rows[0].id
    return { found: true, userId: result.rows[0].id };
  } else {
    return { found: false, userId: null };
  }
};
