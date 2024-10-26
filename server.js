import express from "express"
import dotenv from  "dotenv"
import {bookRouter, commentRouter, userRouter} from "./routes/index.routes.js"
import { connectDatabase } from "./database/database.js"
import { createTables } from "./database/table.js"

dotenv.config()
const PORT = process.env.PORT

const app = express()

app.use(express.json())
app.use("/users", userRouter)
app.use("/books", bookRouter)
app.use("/comments", commentRouter)

app.listen(PORT , () => {
    console.log(`server is running in ${PORT} port`);
    connectDatabase()
    createTables()
})