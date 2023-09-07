import { findSingleUser } from "../Database/user.db.queries.js"
const login=async (req,res)=>{
    const {email,password} = req.body
    res.send(await findSingleUser(email,password)==null)
}

export {
    login
}