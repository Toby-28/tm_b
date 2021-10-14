const router= require('express').Router(),
    {postproduct, postphoto, delet, get, getcount}= require('./controller'),
    {upload}= require('../../config/image_uploader')

router.post('/product', postproduct)
router.post('/photo', upload.single('ads_photo'), postphoto)
router.delete('/', delet)
router.get('/', get)
router.get('/count', getcount)

module.exports= router