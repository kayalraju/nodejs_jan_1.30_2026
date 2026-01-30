const express=require('express');
const StudentApiController = require('../controllers/StudentApiController');


const router=express.Router();



router.post('/create/student',StudentApiController.createStudent)
router.get('/student',StudentApiController.getStudent)
router.get('/edit/:id',StudentApiController.getEditStudent)
router.put('/update/:id',StudentApiController.updateStudent)
router.delete('/delete/:id',StudentApiController.deleteStudent)



module.exports=router