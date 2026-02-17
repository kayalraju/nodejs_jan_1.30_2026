const mongoose = require('mongoose');
const Schema = mongoose.Schema;

    const JoiSchema= new Schema({
        name:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true
        },
        city:{
            type: String,
            required: true
        },
        password:{
            type: String,
            required: true
        }
        
        
     })

     const JoiModel= mongoose.model('joiModel', JoiSchema);

     module.exports= JoiModel;