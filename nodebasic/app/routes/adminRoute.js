const express=require('express');

const AdminAuthController = require('../controllers/AdminAuthController');
const AdminAuthCheck = require('../middleware/adminAuthCheck');
;
const router=express.Router();




router.get('/login',AdminAuthController.login)
router.post('/login/create',AdminAuthController.loginPost)

router.get('/dashboard',AdminAuthCheck,AdminAuthController.AdminCheckAuth,AdminAuthController.dashboard)

router.get('/logout',AdminAuthCheck,AdminAuthController.logout)







module.exports=router