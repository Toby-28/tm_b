const router= require('express').Router()
const { checkToken}= require('../../auth/token_valid')
const { getAll, addBanner, editBanner, deleteBanner}= require('./ban.controller')

router.get('/', getAll)
router.post('/', addBanner)
router.patch('/', editBanner)
router.delete('/', deleteBanner)

module.exports= router