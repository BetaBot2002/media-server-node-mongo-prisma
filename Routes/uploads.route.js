import {upload} from "../Middleware/multer.config.js"
import { uploadImage } from "../Controllers/upload.controller.js"
import express from 'express'

const router=express.Router()

router.route('/upload-image').post(upload.single('file'),uploadImage)

export {
    router
}