import multer from "multer";
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,`./Public/Uploads/Images`)
    },
    filename:function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
      }
})

const upload= multer({storage:storage})

export {
    upload
}