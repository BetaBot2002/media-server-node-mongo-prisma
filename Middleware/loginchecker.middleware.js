const notLoggedIn=(req,res,next)=>{
    if(req.session.token){
        res.status(200).send({
            message:`ALREADY LOGGED IN`
        })
    }else{
        next()
    }
}

export {
    notLoggedIn
}