import { registerOneUser } from "../Database/user.db.queries.js";

const register=async (req,res)=>{
    const {email,password} =req.body
    try {
        const user=await registerOneUser(email,password)
        res.status(200).send(user)
    } catch (error) {
        res.status(200).send({
            message:`USER ALREADY EXISTS FOR: ${email}`
        })
    }
}

export {
    register
}