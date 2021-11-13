const router= require('express').Router(),
    {get, post, patch, delet}= require('./controller'),
    {upload}= require('../../tools/image_uploader')

router.get('', get)
router.post('', post)
router.patch('/:id', upload.single('shop_photo'), patch)
router.delete('/:id', delet)

module.exports= router