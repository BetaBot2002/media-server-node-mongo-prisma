import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const deleteToken=async (token)=>{
    return await prisma.blacklistTokens.create({
        data:{
            token:token
        }
    })
}

const tokenExists=async (token)=>{
    const blacklistedToken=await prisma.blacklistTokens.findUnique({
        where:{
            token:token
        }
    })
    console.log(blacklistedToken)
    return !(blacklistedToken==null)
}

export {
    deleteToken,
    tokenExists
}