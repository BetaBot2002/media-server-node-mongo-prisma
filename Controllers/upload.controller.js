const uploadImage=(req,res)=>{
    console.log(req.file)
    res.send("ok")
}

export {
    uploadImage
}