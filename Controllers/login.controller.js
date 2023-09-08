import { findSingleUser } from "../Database/user.db.queries.js"
import { signUser } from "../Middleware/apikeyauth.jwt.js"
const login=async (req,res)=>{
    const {email,password} = req.body
    const user=await findSingleUser(email,password)
    if(!user){
        res.status(404).send({
            message:`NOT FOUND`
        })
    }else{
        const userToken=signUser(email)
        req.session.token=userToken
        res.status(200).send({
            token:userToken,
            checkS:req.session.token
        })
    }
}

export {
    login
}