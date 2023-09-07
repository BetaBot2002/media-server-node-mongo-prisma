import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


const registerOneUser=async (email,password)=>{
    return await prisma.user.create({
        data:{
            email:email,
            password:password
        }
    })
}


const findSingleUser=async (email,password)=>{
    return await prisma.user.findUnique({
        where:{
            email:email,
            password:password
        }
    })
}

export {
    registerOneUser,
    findSingleUser
}