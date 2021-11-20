const router= require('express').Router(),
    {patch_photo}= require('./controller'),
    {upload}= require('../../tools/image_uploader')

router.patch('/:id', upload.single('banner_photo'), patch_photo)

module.exports= router