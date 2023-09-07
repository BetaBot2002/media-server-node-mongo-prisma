import multer from "multer";
const fileTypeToFolderMap={
    image:`Images`,
    video:`Videos`,
    audio:`Audios`
}
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let fileType=file.mimetype.split('/')[0]
        let rootFolder=`./Public/Uploads/`
        let filePath=rootFolder+`${fileTypeToFolderMap[fileType] || `Others`}`
        cb(null, filePath)
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        const fileExtension = file.originalname.split('.').pop();
        // Construct the filename with the file extension
        cb(null, file.fieldname + '-' + uniqueSuffix + '.' + fileExtension);
    }
})

const upload = multer({ storage: storage })

export {
    upload
}