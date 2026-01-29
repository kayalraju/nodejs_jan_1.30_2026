const Student=require('../models/student');

class StudentApiController {
    async createStudent(req,res){
        //console.log(req.body);
        try{
            const {name,email,city}=req.body
            const data=new Student({
                name,
                email,
                city
            })
           const student= await data.save()
           return res.status(201).json({
               success:true,
               message:"student created successfully",
               data:student
           })

        }catch(err){
            return res.status(500).json({
               success:false,
               message:err.message,
               
           })
        }

    }


    async getStudent(req,res){
        try{
            const data=await Student.find()
            return res.status(200).json({
                success:true,
                message:"student list",
                total:data.length,
                data:data
            })
        }catch(err){
            return res.status(500).json({
                success:false,
                message:err.message
            })
        }
    }
}



module.exports = new StudentApiController();