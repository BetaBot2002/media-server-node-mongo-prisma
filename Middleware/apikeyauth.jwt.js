import jwt from 'jsonwebtoken';

const signUser=(email)=>{
    const token=jwt.sign({email:email},process.env.JWT_SECRET_KEY)
    return token
}

const getDecodedData=(token)=>{
    return jwt.decode(token)
}

export {
    signUser,
    getDecodedData
}