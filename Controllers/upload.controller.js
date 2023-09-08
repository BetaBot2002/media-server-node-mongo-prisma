import { generateUniqueKey } from "../Helpers/uniqueId.helper.js"
import { insertOneFile } from "../Database/file.db.queries.js"

const uploadImage = async (req, res) => {
    console.log(req.file)
    const email = req.email
    const file = {
        fileid: generateUniqueKey(req.file.filename),
        filename: req.file.filename,
        filetype: req.file.mimetype,
        userEmail: email
    }

    const insertedFile = await insertOneFile(file)
    res.status(200).send(insertedFile)

}

export {
    uploadImage
}