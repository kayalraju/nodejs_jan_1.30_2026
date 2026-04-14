const express=require('express');
const AuthController = require('../controllers/AuthController');
const authCheck = require('../middleware/auth');




const router=express.Router();


router.post('/register',AuthController.register)
router.post('/verify',AuthController.verify)
router.post('/login',AuthController.login)
router.post('/reset-password-link',AuthController.resetPasswordLink);
router.post('/reset-password/:id/:token',AuthController.resetPassword)

//router.use(authCheck)
router.get('/dashboard',authCheck,AuthController.dashboard)
router.get('/profile',authCheck,AuthController.profile)






module.exports=router