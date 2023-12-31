import { verifyRefreshToken, verifyToken } from "../Helpers/jwt.auth.helper.js"
import { tokenExists } from "../Database/blacklisttokens.db.queries.js"


const verifyUserToken = async (req, res, next) => {
    const token = req.token
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

const verifyUserRefreshToken = async (req, res, next) => {
    const token = req.token
    const isBlacklisted = await tokenExists(token)
    if (isBlacklisted) {
        res.status(200).send({
            message: `ALREADY LOGGED OUT`
        })
    } else {
        const payload = verifyRefreshToken(token)
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


export {
    verifyUserToken,
    verifyUserRefreshToken
}