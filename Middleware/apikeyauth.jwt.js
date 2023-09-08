import jwt from 'jsonwebtoken';

const signUser=(email)=>{
    const token=jwt.sign({email:email},process.env.JWT_SECRET_KEY)
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

export {
    signUser,
    getDecodedData,
    verifyToken
}