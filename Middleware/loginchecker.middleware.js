import { getDecodedData } from "./apikeyauth.jwt.js"

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
    if (req.session.token) {
        const email=getDecodedData(req.session.token).email
        req.email=email
        console.log(req.email)
        next()
    } else {
        res.status(200).send({
            message: `NOT LOGGED IN`
        })
    }
}

export {
    loggedIn,
    notLoggedIn
}