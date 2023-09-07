import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const findSingleUser=async (email,password)=>{
    return await prisma.user.findUnique({
        where:{
            email:email,
            password:password
        }
    })
}

export {
    findSingleUser
}