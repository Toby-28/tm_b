const router= require('express').Router(),
    {patch_photo, get_photo, sup_admin_patch_photo}= require('./controller'),
    {upload}= require('../../tools/image_uploader')

//

router.patch('/:id', upload.single('banner_photo'), patch_photo)
router.get('/:id', get_photo)
router.patch('/:id/:tertip/:shop_id', sup_admin_patch_photo)

module.exports= router