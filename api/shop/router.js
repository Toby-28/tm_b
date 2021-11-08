const router= require('express').Router(),
    {get, post, patch, delet}= require('./controller')

router.get('', get)
router.post('', post)
router.patch('/:id', patch)
router.delete('/:id', delet)

module.exports= router