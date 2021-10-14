const router= require('express').Router()
const {check, edit, get}= require('./sa.controller')
const {checkToken}= require('../auth/token_valid')

router.get('/', checkToken, get)
router.post('/', check)
router.patch('/', checkToken, edit)

module.exports= router