const router= require('express').Router(),
    {get, patch, post, delet}= require('./controller')

router.get('', get)
router.patch('', patch)
router.post('', post)
router.delete('', delet)

module.exports= router