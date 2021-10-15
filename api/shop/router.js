const router= require('express').Router(),
    {get, post, patch, delet}= require('./controller')

router.get('', get)
router.post('', post)
router.patch('', patch)
router.delete('', delet)

module.exports= router