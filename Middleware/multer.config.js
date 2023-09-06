import multer from "multer";
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let fileType=file.mimetype.split('/')[0]
        let filePath=fileType==='image'?`./Public/Uploads/Images`:fileType==='video'?`./Public/Uploads/Videos`:`./Public/Uploads/Others`
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