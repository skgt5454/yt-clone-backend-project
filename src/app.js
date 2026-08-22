import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
//configure means kisi system ya application ko apni requirement ke acc setup krna
const app = express() // ye basically application bna deta h
app.use(cors(
    {
        origin:process.env.CORS_ORIGIN,
        credentials:true
    }
))
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(cookieParser())//kai baar hum files,folder ,pdf vagera store rkhna chahta hu taki use koi kbhi bhi excesss kr ske to bna dete hai public folder
app.use(express.static("public"))


//routes import
import userRouter from "./routes/user.router.js"
app.use("/api/v1/users",userRouter)





export { app }



















 











