import { verifyToken } from "../Helpers/jwt.auth.helper.js"


const verifyUserToken = (req, res, next) => {
    const bearer=req.headers['authorization']
    if(!bearer){
        res.status(404).send({
            message:`TOKEN NOT FOUND`
        })
    }else{
        const token=bearer.split(' ')[1]
        const payload=verifyToken(token)
        if(payload.message){
            res.status(200).send({
                message: payload.message
            })
        }else{
            const {email}=payload
            req.email=email
            console.log(req.email)
            next()
        }

    }
}

export {
    verifyUserToken
}