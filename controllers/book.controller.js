import pool from "../database/database.js"
export function addNewBook (req, res, next) {
    try {
        res.status(200).send("Success")
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

export function getBookById (req, res, next) {
    try {
        res.status(200).send("Success")
    } catch (error) {
        next(error)
    }
}

export function updateBookById (req, res, next) {
    try {
        res.status(200).send("Success")
    } catch (error) {
        next(error)
    }
}

export function deleteBookById (req, res, next) {
    try {
        res.status(200).send("Success")
    } catch (error) {
        next(error)
    }
}