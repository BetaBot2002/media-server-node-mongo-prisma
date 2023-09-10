import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const insertOneFile = async (file) => {
    return await prisma.file.create({
        data: file
    })
}

const findSingleFile = async (userEmail, fileid) => {
    return await prisma.file.findUnique({
        where: {
            userEmail: userEmail,
            fileid: fileid
        }
    })
}

const updateSingleFile = async (fileid, email, newname) => {
    console.log(`hello:`, fileid, email, newname)
    return await prisma.file.update({
        where: {
            fileid: fileid,
            userEmail: email
        },
        data: {
            originalname: newname
        }
    })
}

const deleteSingleFile = async (fileid, email) => {
    return await prisma.file.delete({
        where: {
            fileid: fileid,
            userEmail: email
        }
    })
}

export {
    insertOneFile,
    findSingleFile,
    updateSingleFile,
    deleteSingleFile
}