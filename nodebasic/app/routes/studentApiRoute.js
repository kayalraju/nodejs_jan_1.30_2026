const express=require('express');
const StudentApiController = require('../controllers/StudentApiController');
const Upload = require('../utils/studentImageUpload');


const router=express.Router();



router.post('/create/student',Upload.single('image'),StudentApiController.createStudent)
router.get('/student',StudentApiController.getStudent)
router.get('/edit/:id',StudentApiController.getEditStudent)
router.put('/update/:id',StudentApiController.updateStudent)
router.delete('/delete/:id',StudentApiController.deleteStudent)



module.exports=router