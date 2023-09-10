import {upload} from "../Middleware/multer.config.js"
import { uploadFile,getFile,updateFile, deleteFile } from "../Controllers/file.controller.js"
import { verifyUserToken } from "../Middleware/userTokenVerifier.middleware.js"
import { addTokenToRequest } from "../Middleware/tokenChecker.middleware.js"
import express from 'express'
const fileRouter=express.Router()

fileRouter.route('/upload').post(addTokenToRequest,verifyUserToken,upload.single('file'),uploadFile)
fileRouter.route('/get/:fileid').post(addTokenToRequest,verifyUserToken,getFile)
fileRouter.route('/update').post(addTokenToRequest,verifyUserToken,updateFile)
fileRouter.route('/delete').post(addTokenToRequest,verifyUserToken,deleteFile)
export {
    fileRouter
}