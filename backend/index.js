import express from "express";

const app=express();

app.use(express.urlencoded({
    extended:true
}));

app.use("/",(req,res)=>{
    res.json("Hello from port")
})
app.listen(8080, ()=>{
    console.log("Listeneing port on 8080")
})