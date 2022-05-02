const express=require('express')
const router=express.Router()
const serve=require('../controllers/test')

router.get('/convert',serve.convert_currency)

module.exports=router