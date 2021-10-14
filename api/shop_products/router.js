const router= require('express').Router(),
    {post, patch, delet, get, get_count}= require('./controller')

router.post('', post)
router.patch('', patch)
router.delete('', delet)
router.get('', get)
router.get('/count', get_count)

module.exports =router