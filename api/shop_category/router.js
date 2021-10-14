const router= require('express').Router(),
    {post, delet, get, get_count}= require('./controller')

router.post('', post)
router.delete('', delet)
router.get('', get)
router.get('/count', get_count)

module.exports= router