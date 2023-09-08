import { login } from "../Controllers/login.controller.js";
import { register } from "../Controllers/registration.controller.js";

import express from 'express'
const userRouter=express.Router()

userRouter.route('/register').post(register)
userRouter.route('/login').post(login)

export {
    userRouter
}