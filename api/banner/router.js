const router= require('express').Router()
const { checkToken}= require('../../auth/token_valid')
const { getAll}= require('./ban.controller')

router.get('/', getAll)
router.post('/', )
router.patch('/', )
router.delete('/', )

module.exports= router