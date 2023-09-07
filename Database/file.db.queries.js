import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

import { findSingleUserByEmail } from './user.db.queries.js'

const insertOneFile=async (file)=>{
    return await prisma.file.create({
        data:file
    })
}

export {
    insertOneFile
}