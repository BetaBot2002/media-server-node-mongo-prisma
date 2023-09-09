import { generateUniqueKey } from "../Helpers/uniqueId.helper.js"
import { insertOneFile,findSingleFile } from "../Database/file.db.queries.js"

const uploadFile = async (req, res) => {
    console.log(req.file)
    const {email,fileURL} = req
    const file = {
        fileid: generateUniqueKey(req.file.filename),
        filename: req.file.filename,
        filetype: req.file.mimetype,
        fileurl:fileURL,
        originalname:req.file.originalname,
        userEmail: email
    }

    const insertedFile = await insertOneFile(file)
    res.status(200).send(insertedFile)

}


const getFile=async (req,res)=>{
    const email = req.email
    const {fileid}=req.params
    const file=await findSingleFile(email,fileid)
    console.log(file)
    res.status(200).send(file)

}

export {
    uploadFile,
    getFile
}