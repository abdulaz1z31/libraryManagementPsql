import express from "express"
import {addCommentToBook, getAllCommentsOfBook} from "../controllers/index.controller.js"
const commentRouter = express.Router()

commentRouter.post("/books/:id", addCommentToBook)
commentRouter.get("/books/:id", getAllCommentsOfBook)

export default commentRouter