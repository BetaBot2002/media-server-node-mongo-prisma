import { login } from "../Controllers/login.controller.js";
import { register } from "../Controllers/registration.controller.js";
import { notLoggedIn } from "../Middleware/loginchecker.middleware.js";

import express from 'express'
const userRouter=express.Router()

userRouter.route('/register').post(register)
userRouter.route('/login').post(notLoggedIn,login)
userRouter.route('/logout').get((req,res)=>{
    req.session.destroy()
    res.send(`done`)
})
export {
    userRouter
}