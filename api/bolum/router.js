const router= require('express').Router()
const { get, getid, post, patch, delet}= require('./controller')

router.get('', get)
router.post('', post)
router.get('/:id', getid)
router.patch('', patch)
router.delete('', delet)

module.exports= router 