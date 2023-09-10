import { login, refresh } from "../Controllers/login.controller.js";
import { register } from "../Controllers/registration.controller.js";
import { logout } from "../Controllers/logout.controller.js";
import { addTokenToRequest } from "../Middleware/tokenChecker.middleware.js";

import express from 'express'
import { verifyUserRefreshToken } from "../Middleware/userTokenVerifier.middleware.js";
const userRouter=express.Router()

userRouter.route('/register').post(register)
userRouter.route('/login').post(login)

userRouter.route('/logout').post(addTokenToRequest,logout)

userRouter.route('/refresh').get(addTokenToRequest,verifyUserRefreshToken,refresh)

export {
    userRouter
}