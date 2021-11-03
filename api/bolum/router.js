const router= require('express').Router()
const { get, sup_admin_get, getid, post, patch, delet}= require('./controller')

router.get('', get)
router.get('/sup_admin', sup_admin_get)
router.get('/:id', getid)
router.post('', post)
router.patch('', patch)
router.delete('', delet)

module.exports= router 