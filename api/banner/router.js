const router= require('express').Router(),
    { post, patch, get, sup_admin_get, delet}= require('./ban.controller'),
    {upload}= require('../../tools/image_uploader')

/* 

    route columnyny soramaly!

*/

router.get('/', get)
router.get('/sup_admin', sup_admin_get)
router.post('/', upload.single('banner_photo'), post) //surat hokman bolmaly
router.patch('/:id', upload.single('banner_photo'), patch)
router.delete('/:id', delet)

module.exports= router