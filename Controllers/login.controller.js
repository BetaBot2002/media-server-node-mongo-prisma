import { findSingleUser } from "../Database/user.db.queries.js"
const login=async (req,res)=>{
    const {email,password} = req.body
    const user=await findSingleUser(email,password)
    if(!user){
        res.status(404).send({
            message:`NOT FOUND`
        })
    }else{
        res.status(200).send(user)
    }
}

export {
    login
}