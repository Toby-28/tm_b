const router= require('express').Router()
const { get, getId, post, patch, delet}= require('./controller')
 
router.get('', get)
router.get('/id', getId)
router.post('', post)
router.patch('/:id', patch)
router.delete('/:id', delet)

module.exports= router