
const express=require('express');

const router=express.Router();

const csvRoute=require('./csvRoute')
const homeroute=require('./homeroute')
const authRoute=require('./authRoute')
const studentApiRoute=require('./studentApiRoute')
const studentejsRoute=require('./studentejsRoute')
const authEjsRoute=require('./authEjsRoute')
const joiRoute=require('./joiRoute')
const adminRoute=require('./adminRoute')


router.use(authEjsRoute)
router.use('/csv',csvRoute)
router.use(homeroute)
router.use('/api/v1',authRoute)
router.use('/api/v1',studentApiRoute)
router.use('/student',studentejsRoute)  
router.use('/joi',joiRoute)
router.use('/admin',adminRoute)

module.exports=router