const router= require('express').Router(),
    {post}= require('./controller')

router.post('', post)

module.exports= router