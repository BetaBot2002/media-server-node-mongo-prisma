import multer from "multer";
const fileTypeToFolderMap={
    image:`Images`,
    video:`Videos`,
    audio:`Audios`
}
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let fileType=file.mimetype.split('/')[0]
        let publicFolder=`.${process.env.PUBLIC_FOLDER}`
        let rootFolder=`/Uploads/`
        let filePath=publicFolder+rootFolder+`${fileTypeToFolderMap[fileType] || `Others`}`
        req.filepath=rootFolder+`${fileTypeToFolderMap[fileType] || `Others`}`
        cb(null, filePath)
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        const fileExtension = file.originalname.split('.').pop();
        let fileName=file.mimetype.split('/')[0] + '-' + uniqueSuffix + '.' + fileExtension
        req.filepath=req.filepath+`/`+fileName
        // Construct the filename with the file extension
        cb(null, fileName);
    }
})

const upload = multer({ storage: storage })

export {
    upload
}