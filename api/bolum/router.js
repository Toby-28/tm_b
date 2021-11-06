const router= require('express').Router(),
     { get, sup_admin_get, getid, post, patch, delet}= require('./controller'),
     {upload}= require('../../tools/image_uploader')
     
router.get('', get)
router.get('/sup_admin', sup_admin_get)
router.get('/:id', getid)
router.post('', upload.single('bolum_photo'), post)
router.patch('/:id', upload.single('bolum_photo'), patch)
router.delete('/:id', delet)

module.exports= router 