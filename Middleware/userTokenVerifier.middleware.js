import { verifyToken } from "../Helpers/jwt.auth.helper.js"
import { tokenExists } from "../Database/blacklisttokens.db.queries.js"


const verifyUserToken = async (req, res, next) => {
    const bearer = req.headers['authorization']
    if (!bearer) {
        res.status(404).send({
            message: `TOKEN NOT FOUND`
        })
    } else {
        const token = bearer.split(' ')[1]
        const isBlacklisted = await tokenExists(token)
        if (isBlacklisted) {
            res.status(200).send({
                message: `TOKEN EXPIRED`
            })
        } else {
            const payload = verifyToken(token)
            if (payload.message) {
                res.status(200).send({
                    message: payload.message
                })
            } else {
                const { email } = payload
                req.email = email
                console.log(req.email)
                next()
            }

        }

    }
}

export {
    verifyUserToken
}