const express=require('express');
const AuthEjsController = require('../controllers/AuthEjsController');
const AuthCheck = require('../middleware/authcheck');
;
const router=express.Router();


router.get('/register/view',AuthEjsController.register)
router.post('/create/register',AuthEjsController.registercreate)

router.get('/login/view',AuthEjsController.login)
router.post('/login/create',AuthEjsController.logincreate)

router.get('/user/dashboard',AuthCheck,AuthEjsController.CheckAuth,AuthEjsController.dashboard)

router.get('/logout',AuthCheck,AuthEjsController.logout)







module.exports=router