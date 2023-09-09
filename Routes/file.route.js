import {upload} from "../Middleware/multer.config.js"
import { uploadFile,getFile } from "../Controllers/file.controller.js"
import { verifyUserToken } from "../Middleware/userTokenVerifier.middleware.js"
import { addTokenToRequest } from "../Middleware/tokenChecker.middleware.js"
import express from 'express'
const fileRouter=express.Router()

fileRouter.route('/upload').post(addTokenToRequest,verifyUserToken,upload.single('file'),uploadFile)
fileRouter.route('/:fileid').post(addTokenToRequest,verifyUserToken,getFile)
export {
    fileRouter
}