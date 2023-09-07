import { findSingleUserByEmail } from "../Database/user.db.queries.js"

const checkUser=async (email)=>{
    const user=await findSingleUserByEmail(email)
    return user
}

export {
    checkUser
}