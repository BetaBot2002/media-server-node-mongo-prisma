import {upload} from "../Middleware/multer.config.js"
import { uploadImage } from "../Controllers/upload.controller.js"
import express from 'express'
const fileRouter=express.Router()

fileRouter.route('/upload-image').post(upload.single('file'),uploadImage)

export {
    fileRouter
}