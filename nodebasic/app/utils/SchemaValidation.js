const Joi=require('joi')




const StduentSchemaValidation=Joi.object({
    name:Joi.string().min(3).max(30).required(),
    city:Joi.string().min(1).max(10).required(),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'in'] } }),
    password:Joi.string().min(8).required()
   
    
})


const ProductSchemaValidation=Joi.object({
    
})






module.exports={StduentSchemaValidation,ProductSchemaValidation}