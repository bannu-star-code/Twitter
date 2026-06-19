import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import databaseConnection from "./config/database.js";
import userRoutes from "./routes/userRoutes.js"
import tweetRoutes from "./routes/tweetRoutes.js"
dotenv.config()
databaseConnection()


const app=express();

app.use(express.urlencoded({
    extended:true
}));
app.use(express.json())
app.use(cookieParser())

// const corsOptions={
//     origin:"http://localhost:3000",
//     credentials:true
// }

// app.use(cors(corsOptions))

app.use("/api/user", userRoutes)
app.use("/api/tweet",tweetRoutes)

app.use("/",(req,res)=>{
    res.json("Hello from port")
})
app.listen(8080, ()=>{
    console.log("Listeneing port on 8080")
})