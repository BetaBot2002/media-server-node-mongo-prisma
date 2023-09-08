import { getDecodedData,verifyToken } from "./apikeyauth.jwt.js"

const notLoggedIn = (req, res, next) => {
    if (req.session.token) {
        res.status(200).send({
            message: `ALREADY LOGGED IN`
        })
    } else {
        next()
    }
}

const loggedIn = (req, res, next) => {
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
    loggedIn,
    notLoggedIn
}