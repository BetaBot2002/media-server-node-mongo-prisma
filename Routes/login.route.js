import { login } from "../Controllers/login.controller.js";

import express from 'express'
const userRouter=express.Router()

userRouter.route('/login').post(login)

export {
    userRouter
}