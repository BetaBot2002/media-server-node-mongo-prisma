import { findSingleUser } from "../Database/user.db.queries.js"
import { getNewAccsessToken, signUser } from "../Helpers/jwt.auth.helper.js"
const login = async (req, res) => {
    const { email, password } = req.body
    const user = await findSingleUser(email, password)
    if (!user) {
        res.status(404).send({
            message: `NOT FOUND`
        })
    } else {
        const { accsessToken, refreshToken } = signUser(email)
        // req.session.token=userToken
        res.status(200).send({
            accsessToken: accsessToken,
            refreshToken: refreshToken
        })
    }
}

const refresh = async (req, res) => {
    const { email } = req
    const newAccessToken = getNewAccsessToken(email)
    // req.session.token=userToken
    res.status(200).send({
        accsessToken: newAccessToken
    })
}



export {
    login,
    refresh
}