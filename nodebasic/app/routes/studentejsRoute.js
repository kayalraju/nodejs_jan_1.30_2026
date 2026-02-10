const express=require('express');
const StudentEjsController = require('../controllers/StudentEjsController');



const router=express.Router();



router.get('/student/list',StudentEjsController.index)
router.get('/student/add',StudentEjsController.add)
router.post('/student/store',StudentEjsController.store)
router.get('/student/edit/:id',StudentEjsController.editStudent)
router.post('/student/update/:id',StudentEjsController.UpdateStudent)
router.get('/student/delete/:id',StudentEjsController.deleteStudent)



module.exports=router