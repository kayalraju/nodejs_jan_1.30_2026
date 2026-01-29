const express=require('express');
const StudentApiController = require('../controllers/StudentApiController');

const router=express.Router();



router.post('/create/student',StudentApiController.createStudent)
router.get('/student',StudentApiController.getStudent)



module.exports=router