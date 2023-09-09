import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const insertOneFile=async (file)=>{
    return await prisma.file.create({
        data:file
    })
}

const findSingleFile=async (userEmail,fileid)=>{
    return await prisma.file.findUnique({
        where:{
            userEmail:userEmail,
            fileid:fileid
        }
    })
}

export {
    insertOneFile,
    findSingleFile
}