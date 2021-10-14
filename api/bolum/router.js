const router= require('express').Router()
const { get, post, patch, delet}= require('./controller')

router.get('', get)
router.post('', post)
router.patch('', patch)
router.delete('', delet)

module.exports= router 