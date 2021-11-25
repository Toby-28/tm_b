const router= require('express').Router()
const { post, sup_admin_post, patch}= require('./controller')
 
router.get('/', )
router.get('/id', )
router.post('/', post)
router.post('/sup_admin', sup_admin_post)
router.patch('/:id', patch)
router.delete('/', )

module.exports= router