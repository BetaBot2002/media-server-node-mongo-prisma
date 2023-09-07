import bcrypt from 'bcryptjs';


const generateUniqueKey = (value) => {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(value, salt);
    return hash
}

export {
    generateUniqueKey
}
