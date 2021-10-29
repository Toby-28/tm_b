const router= require('express').Router(),
    {post, sellers_patch, sup_admin_patch}= require('./controller')

router.post('', post)
router.patch('/seller', sellers_patch)
router.patch('/sup_admin', sup_admin_patch)

module.exports= router