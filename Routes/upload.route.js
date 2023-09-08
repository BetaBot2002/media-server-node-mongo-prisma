import {upload} from "../Middleware/multer.config.js"
import { uploadImage } from "../Controllers/upload.controller.js"
import { verifyUserToken } from "../Middleware/userTokenVerifier.middleware.js"
import { addTokenToRequest } from "../Middleware/tokenChecker.middleware.js"
import express from 'express'
const fileRouter=express.Router()

fileRouter.route('/').post(addTokenToRequest,verifyUserToken,upload.single('file'),uploadImage)

export {
    fileRouter
}