import express from "express";  
import cors from "cors"
import cookieParser from "cookie-parser"
import dotenv from "dotenv";
dotenv.config();

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true,
}))

app.use(express.json({limit:"10mb"}))
app.use(express.urlencoded({extended: true,limit:"16kb"}))
app.use(express.static("public")) 
app.use(cookieParser());

import userRoute from "./routes/user.route.js"
import authRoute from "./routes/auth.routes.js"

app.use("/api/v1/users",userRoute);
app.use("/api/auth",authRoute);
app.get("/",(req,res)=>{
    res.end("Home page")
})

export {app}