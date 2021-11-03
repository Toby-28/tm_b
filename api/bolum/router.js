const router= require('express').Router()
const { get, getid, post, patch, delet}= require('./controller')

router.get('', get)
router.get('/:id', getid)
router.post('', post)
router.patch('', patch)
router.delete('', delet)

module.exports= router 