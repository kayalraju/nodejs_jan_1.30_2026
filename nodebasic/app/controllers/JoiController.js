
const JoiModel=require('../models/joiModel')
const { StduentSchemaValidation } = require('../utils/SchemaValidation')



class JoiController{


    async createDAta(req,res){
    
        
        

        try{
            const data={
                name:req.body.name,
                email:req.body.email,
                city:req.body.city,
                password:req.body.password
            }

            const {error,value}= StduentSchemaValidation.validate(data)
            if(error){
                return res.status(400).json({
                    success:false,
                    message:error.details[0].message
                })
            }else{
                const student=new JoiModel(value)
                await student.save()

                return res.status(201).json({
                    success:true,
                    message:"student created successfully",
                    data:student
                })
            }

        }catch(err){   
           return res.status(500).json({
               success:false,
               message:err.message
           })
            
         }

    }


}


module.exports=new JoiController()