import jwt from 'jsonwebtoken';

const time=15

const signUser=(email)=>{
    const token=jwt.sign({email:email},process.env.JWT_SECRET_KEY,{expiresIn:time})
    const refreshToken=jwt.sign({email:email},process.env.REFRESH_JWT_SECRET_KEY)
    return {
        accsessToken:token,
        refreshToken:refreshToken
    }
}

const getNewAccsessToken=(email)=>{
    const token=jwt.sign({email:email},process.env.JWT_SECRET_KEY,{expiresIn:time})
    return token
}

const getDecodedData=(token)=>{
    return jwt.decode(token)
}

const verifyToken=(token)=>{
    try {
        const decoded=jwt.verify(token,process.env.JWT_SECRET_KEY)
        return decoded
    } catch (error) {
        return {message:`INVALID TOKEN`}
    }
    
}

const verifyRefreshToken=(token)=>{
    try {
        const decoded=jwt.verify(token,process.env.REFRESH_JWT_SECRET_KEY)
        return decoded
    } catch (error) {
        return {message:`INVALID TOKEN`}
    }
    
}

export {
    signUser,
    getDecodedData,
    verifyToken,
    getNewAccsessToken,
    verifyRefreshToken
}