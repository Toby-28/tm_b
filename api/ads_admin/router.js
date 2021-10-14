const router= require('express').Router(),
    {post, get}= require('./controller'),
    {upload}= require('../../config/image_uploader')

router.post('/', upload.single('ads_admin_photo'), post)
router.get('/', get)

module.exports= router