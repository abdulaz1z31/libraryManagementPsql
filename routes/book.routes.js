import express from "express"
import {
    addNewBook,
    getAllBooks, 
    getBookById, 
    updateBookById, 
    deleteBookById
} from "../controllers/index.controller.js"
import { validationBook, validationUpdateBook } from "../middleware/book.middleware.js"
const bookRouter = express.Router()

bookRouter.post("/", validationBook, addNewBook)
bookRouter.get("/", getAllBooks)
bookRouter.get("/:id", getBookById)
bookRouter.put("/:id", validationUpdateBook,updateBookById)
bookRouter.delete("/:id", deleteBookById)


export default bookRouter