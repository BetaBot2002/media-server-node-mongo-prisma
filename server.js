import dotenv from "dotenv";
dotenv.config()

import express from "express";
const app=express();

import cors from "cors";
import { router } from "./Routes/uploads.route.js";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT=process.env.PORT || 4000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static(__dirname+"/Public"))

app.use(router)
app.listen(PORT,()=>{
    console.log(`http://127.0.0.1:${PORT}`)
})

