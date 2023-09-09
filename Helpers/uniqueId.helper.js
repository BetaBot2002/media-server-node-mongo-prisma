import crypto from 'crypto';

const generateUniqueKey = (value) => {
    return crypto.randomBytes(16).toString('hex')
}

export {
    generateUniqueKey
}
