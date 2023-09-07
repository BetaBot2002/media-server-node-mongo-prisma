import { generateUniqueKey } from "../Helpers/uniqueId.helper.js"
import { insertOneFile } from "../Database/file.db.queries.js"
import { checkUser } from "../Helpers/checkuser.helper.js"
import { deleteFile } from "../Helpers/filesystem.helper.js"

const uploadImage = async (req, res) => {
    console.log(req.file)
    const {email}=req.body
    const user=await checkUser(email)
    if(!user){
        deleteFile(req.file.path)
        res.status(404).send({
            message:`USER NOT FOUND`
        })
    }else{
        const file = {
            fileid:generateUniqueKey(req.file.filename),
            filename:req.file.filename,
            filetype:req.file.mimetype,
            userEmail:email
        }
    
        const insertedFile=await insertOneFile(file)
        res.status(200).send(insertedFile)
    }

}

export {
    uploadImage
}