const router= require('express').Router(),
    { get, sup_admin_get, post, patch, delet}= require('./controller'),
    {upload}= require('../../tools/image_uploader')
 
router.get('', get)
router.get('/sup_admin', sup_admin_get)
router.post('', upload.single('category_photo'), post)
router.patch('/:id', upload.single('category_photo'), patch)
router.delete('/:id', delet)

module.exports= router