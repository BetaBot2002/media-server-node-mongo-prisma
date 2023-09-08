import { deleteToken } from "../Database/blacklisttokens.db.queries.js";

const logout = async (req, res) => {
    const token = req.token
    const deleted = await deleteToken(token)
    res.status(200).send({
        token: deleted,
        message: `TOKEN DELETED`
    })
}


export {
    logout
}