import pool from "../database/database.js";


export const addComment = async (comment, userId) => {
   try {
    const {text, book_id} = comment
    await pool.query(
        `
        INSERT INTO comments (text, book_id, user_id) VALUES
        ($1, $2, $3)  
        `, [text, book_id, userId]
    )
    return {success: true}
   } catch (err) {
        return {success: false, error:err}
   }
    
}

export const getAllcomments = async (bookId) => {
    try {
        const allComments = await pool.query(
            `
            SELECT * FROM comments where book_id = $1
            `, [bookId]
        )

       
        
        if (allComments.rows.length > 0) {
            return {found:true, data:allComments.rows}
        } else {
            return {found: false, error:"no"}
        }
    } catch (err) {
        return {found:false, error:err}
    }
}