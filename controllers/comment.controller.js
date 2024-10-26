import pool from "../database/database.js"
import {checkIfIdExistsBooks } from "../service/book.service.js"
import { addComment, getAllcomments } from "../service/comment.service.js"
import { lastLoginedUserId } from "../service/user.service.js"


export async function addCommentToBook (req, res, next) {
    try {
        const bookId = req.params.id 
        const comment = req.body
        const userId = lastLoginedUserId()
        const checkBookId = checkIfIdExistsBooks(bookId)

        if (checkBookId) {
            const result = await addComment(comment, userId) 
           
            const {success} = result
            if (success) {
                return res.status(200).send("Comment added successfully")
            } else {
                return res.status(400).json({err1:result.error})
            }
        } else {
            res.status(400).send("User or Book id not found")
        }
        res.status(200).send("Success")
    } catch (error) {
        next(error)
    }
}

export async function getAllCommentsOfBook (req, res, next) {
    try {
        const bookId = req.params.id 
        const check = checkIfIdExistsBooks(bookId)
        if (check) {
            const result = await getAllcomments(bookId)
            const {found} = result
            if (found) {
                return res.status(200).json(result.data)
            } else {
                if (result?.error == "no") { 
                    return res.status(400).send("Informations not found")
                } else {
                    throw new Error(result?.error)
                }
            }
        } else {
            res.status(400).send("Book not found with this id")
        }
        res.status(200).send("Success")
    } catch (error) {
        next(error)
    }
}