const router= require('express').Router()
const { get, getId, post, patch, delet}= require('./controller')
 
router.get('/', get)
router.get('/id', getId)
router.post('/', post)
router.patch('/', patch)
router.delete('/', delet)

module.exports= router