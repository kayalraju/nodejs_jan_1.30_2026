require('dotenv').config();
const express=require('express')
const path=require('path')
const ejs=require('ejs')
const DatabaseConnection=require('./app/config/dbcon')
const cors=require('cors')
const morgan=require('morgan')
const helmet=require('helmet')
const RateLimit=require('./app/utils/limiter')
const session=require('express-session')
const cookieParser=require('cookie-parser')

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

//session
app.use(session({
    secret: 'keyboardcat',
    resave: false,
    saveUninitialized: false,
    cookie: { 
        maxAge: 1000 * 60 * 60 * 24 // 24 hours
     }
  }))
  app.use(cookieParser())

//define routes
app.use(require('./app/routes/index'))  



const port =3004
app.listen(port,()=>{
    console.log("server is running on port",port)
})
