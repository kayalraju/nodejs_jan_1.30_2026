const express=require('express');
const StudentApiController = require('../controllers/StudentApiController');
const Upload = require('../utils/studentImageUpload');


const router=express.Router();



//router.post('/create/student',Upload.single('image'),StudentApiController.createStudent)
/**
* @swagger
* /api/v1/create/student:
*   post:
*     summary: create Student
*     tags:
*       - Student
*     produces:
*       - application/json
*     parameters:
 *      - in: body
 *        name: Add student
 *        description: Add student in MongoDB.
 *        schema:
 *          type: object
 *          required:
 *            - name
 *            - email
 *            - city
 *          properties:
 *            name:
 *              type: string
 *            email:
 *              type: string
 *            city:
 *              type: string
 *     responses:
 *        201:
 *          description: student data added
 *        400:
 *          description: Bad Request
*        500:
*          description: Server Error
*/
router.post('/create/student',StudentApiController.createStudent)

/**
 * @swagger
 * /api/v1/student:
 *  get:
 *    summary: Get all the student from Database
 *    tags:
 *       - Student
 *    produces:
 *      - application/json
 *    responses:
 *      '200':
 *        description: data fetched successfully.
 */
router.get('/student',StudentApiController.getStudent)
router.get('/edit/:id',StudentApiController.getEditStudent)
router.put('/update/:id',StudentApiController.updateStudent)
router.delete('/delete/:id',StudentApiController.deleteStudent)



module.exports=router