const router= require('express').Router(),
    {login, post, sellers_patch, sup_admin_patch, sellers_get, sup_admin_get, delet}= require('./controller')

router.get('/login', login)
router.post('', post)
router.patch('/seller', sellers_patch)
router.patch('/sup_admin', sup_admin_patch)
router.get('/seller', sellers_get)
router.get('/sup_admin', sup_admin_get)
router.delete('/:id', delet)

module.exports= router