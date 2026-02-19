const mongoose = require('mongoose');
const Schema = mongoose.Schema;

    const CsvSchema= new Schema({
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
        }  
     })

     const CsvModel= mongoose.model('csvModel', CsvSchema);

     module.exports= CsvModel;