import jwt from 'jsonwebtoken';

const signUser=(email)=>{
    const token=jwt.sign({email:email},process.env.JWT_SECRET_KEY,{expiresIn:'30s'})
    const refreshToken=jwt.sign({email:email},process.env.REFRESH_JWT_SECRET_KEY)
    return {
        accsessToken:token,
        refreshToken:refreshToken
    }
}

const getNewAccsessToken=(email)=>{
    const token=jwt.sign({email:email},process.env.JWT_SECRET_KEY,{expiresIn:'30s'})
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