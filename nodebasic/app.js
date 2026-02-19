require('dotenv').config();
const express=require('express')
const path=require('path')
const ejs=require('ejs')
const DatabaseConnection=require('./app/config/dbcon')
const cors=require('cors')
const morgan=require('morgan')
const helmet=require('helmet')
const RateLimit=require('./app/utils/limiter')


// console.log(path);


const app=express();

//database connection
DatabaseConnection()

app.use(morgan('dev'))
app.use(helmet())
app.use(RateLimit)
app.use(cors());
app.set('view engine','ejs')
app.set('views','views')
//define json
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//static files
app.use(express.static(path.join(__dirname,'public'))); 
app.use('uploads',express.static(path.join(__dirname,'/uploads')))
app.use('/uploads',express.static('uploads')); 

const studentejsRoute=require('./app/routes/studentejsRoute')
app.use(studentejsRoute);

const homeroute=require('./app/routes/homeroute')
app.use(homeroute);
const studentApiRoute=require('./app/routes/studentApiRoute')
app.use('/api/v1',studentApiRoute);


const joiRoute=require('./app/routes/joiRoute')
app.use(joiRoute); 

const csvRoute=require('./app/routes/csvRoute')
app.use(csvRoute);  



const port =3004


app.listen(port,()=>{
    console.log("server is running on port",port)
})
