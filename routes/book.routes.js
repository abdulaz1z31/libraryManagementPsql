import express from "express"
import {
    addNewBook,
    getAllBooks, 
    getBookById, 
    updateBookById, 
    deleteBookById
} from "../controllers/index.controller.js"
const bookRouter = express.Router()

bookRouter.post("/", addNewBook)
bookRouter.get("/", getAllBooks)
bookRouter.get("/:id", getBookById)
bookRouter.put("/:id", updateBookById)
bookRouter.delete("/:id", deleteBookById)


export default bookRouter