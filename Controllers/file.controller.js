import { generateUniqueKey } from "../Helpers/uniqueId.helper.js"
import { insertOneFile,findSingleFile,updateSingleFile, deleteSingleFile } from "../Database/file.db.queries.js"
import { deleteFileFromSystem } from "../Helpers/filesystem.helper.js"

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
    if(!file){
        res.status(404).send({
            message:`FILE NOT FOUND`
        })
    }else{
        res.status(200).send(file)
    }
}

const updateFile=async (req,res)=>{
    const {email}=req
    const {fileid,newname}=req.body
    console.log(fileid,email,newname)
    try {
        const file=await updateSingleFile(fileid,email,newname)
        res.status(200).send({
            message:`FILE UPDATED`,
            file:file
        })
    } catch (error) {
        res.status(404).send({
            message:`FILE NOT FOUND`,
        })
    }

}

const deleteFile=async (req,res)=>{
    const {email}=req
    const {fileid}=req.body
    try {
        const file=await deleteSingleFile(fileid,email)
        deleteFileFromSystem(`./Public`+file.fileurl)
        res.status(200).send({
            message:`FILE DELETED`,
            file:file
        })
    } catch (error) {
        res.status(404).send({
            message:`FILE NOT FOUND`,
        })
    }
}

export {
    uploadFile,
    getFile,
    updateFile,
    deleteFile
}