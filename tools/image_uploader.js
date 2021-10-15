const multer = require('multer'),
    path = require('path'),
    storage = multer.diskStorage({
        destination: (req, file, callBack) => {
            callBack(null, './images')
        },
        filename: (req, file, callBack) => {
            callBack(null, `${file.fieldname}_${Date.now()+path.extname(file.originalname)}`)
        }
    }),
    file_filter = (req, file, callBack) => {
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
            callBack(null, true)
        } else {
            callBack('Unsupported files', false)
        }
    },
    upload = multer({
        storage: storage,
        limits: {
            fileSize: 1024 * 1024 * 5
        },
        fileFilter: file_filter
    })

module.exports = {upload}