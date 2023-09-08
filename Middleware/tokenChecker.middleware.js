const addTokenToRequest=(req,res,next)=>{
    const bearer = req.headers['authorization']
    if (!bearer) {
        res.status(404).send({
            message: `TOKEN NOT FOUND`
        })
    }else{
        const token = bearer.split(' ')[1]
        req.token=token
        next()
    }
}

export {
    addTokenToRequest
}