import express from "express"
import {addCommentToBook, getAllCommentsOfBook} from "../controllers/index.controller.js"
import { validationComment } from "../middleware/index.middleware.js"
const commentRouter = express.Router()

commentRouter.post("/books/:id",validationComment, addCommentToBook)
commentRouter.get("/books/:id", getAllCommentsOfBook)

export default commentRouter