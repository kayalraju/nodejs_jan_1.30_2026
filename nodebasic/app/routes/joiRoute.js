const express=require('express');
const JoiController = require('../controllers/JoiController');



const router=express.Router();



router.post('/create/data',JoiController.createDAta)




module.exports=router