import dotenv from "dotenv";
dotenv.config()

import express from "express";
const app=express();

import cors from "cors";

const PORT=process.env.PORT | 4000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static(__dirname+"/Public"))


app.listen(()=>{
    console.log(`http://127.0.0.1:${PORT}`)
},PORT)

