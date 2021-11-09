const router= require('express').Router(),
    { get, sup_admin_get, post, patch, delet}= require('./controller')
 
router.get('/', get)
router.get('/sup_admin', sup_admin_get)
router.post('/', post)
router.patch('/:id', patch)
router.delete('/:id', delet)

module.exports= router