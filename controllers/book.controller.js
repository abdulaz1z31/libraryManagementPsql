import pool from "../database/database.js"
import { insertBook, getByIdBook, updateBook, deleteBook} from "../service/book.service.js"
import {lastLoginedUserId} from "../service/user.service.js"

export async function addNewBook (req, res, next) {
    try {
        const user_id = Number(lastLoginedUserId())
        const bookData = req.body
        const result = await insertBook(bookData, user_id)
        const success = {result}
        if (success) {
            res.status(200).send("Book added successfully")
        } else {
            throw new Error(result.err)
        }
    } catch (error) {
        next(error)
    }
}

export async function getAllBooks (req, res, next) {
    try {
        const allBooks = await pool.query("select * from books")
        res.status(200).send({
            status:"success",
            data:allBooks.rows
        })
    } catch (error) {
        next(error)
    }
}

export async function getBookById (req, res, next) {
    try {
        const bookId = req.params.id
        const result = await getByIdBook(bookId)
        const {found} = result
        if (found) {
            return res.status(200).json({
                status:"success",
                data: result.data
            })
        } else {
            res.status(400).send(result.err)
        }
    } catch (error) {
        next(error)
    }
}

export async function updateBookById (req, res, next) {
    try {
        const bookId = req.params.id
        const dataToUpdate = req.body
        
        
        const bookData = await getByIdBook(bookId)
        const {data} = bookData
        
        for(let key in dataToUpdate) {
            data[key] = dataToUpdate[key]
        }
        const result = await updateBook(bookId, data)
        const {success} = result
        if (success) {
            res.status(200).send("Book updated successfully")
        } else {
            res.status(200).send({
                error:result.err
            })
        }
    } catch (error) {
        next(error)
    }
}

export async function deleteBookById (req, res, next) {
    try {
        const bookId = req.params.id
                
        const result = await deleteBook(bookId)
        console.log(result);
        
        
        const {success} = result
        if (success) {
            return res.status(200).send("Book deleted successfully")
        } else {
          if (result.err == 'no') {
            return res.status(200).send("Book not found with this id")
          }  else {
            return res.status(400).send({err2:result.err})
          }
        }
        
    } catch (error) {
        next(error)
    }
}