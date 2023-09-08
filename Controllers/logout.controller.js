import { deleteToken } from "../Database/blacklisttokens.db.queries.js";

const logout=async (req,res)=>{
    const bearer=req.headers['authorization']
    if(!bearer){
        res.status(404).send({
            message:`TOKEN NOT FOUND`
        })
    }else{
        const token=bearer.split(' ')[1]
        const deleted=await deleteToken(token)
        res.status(200).send({
            token:deleted,
            message:`TOKEN DELETED`
        })
    }
}

export {
    logout
}