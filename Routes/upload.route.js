import {upload} from "../Middleware/multer.config.js"
import { uploadImage } from "../Controllers/upload.controller.js"
import { loggedIn } from "../Middleware/loginchecker.middleware.js"
import express from 'express'
const fileRouter=express.Router()

fileRouter.route('/').post(loggedIn,upload.single('file'),uploadImage)

export {
    fileRouter
}