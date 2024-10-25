import express from "express"
import {addNewUser, loginIn} from "../controllers/index.controller.js"
const userRouter = express.Router()

userRouter.post("/register", addNewUser)
userRouter.post("/login", loginIn)

export default userRouter