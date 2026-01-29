require('dotenv').config();
const express=require('express')
const path=require('path')
const ejs=require('ejs')
const DatabaseConnection=require('./app/config/dbcon')


// console.log(path);


const app=express();

//database connection
DatabaseConnection()

app.set('view engine','ejs')
app.set('views','views')
//define json
app.use(express.json())
//app.use(express.urlencoded({extended:false}))

//static files
app.use(express.static(path.join(__dirname,'public'))); 

const homeroute=require('./app/routes/homeroute')
app.use(homeroute);
const studentApiRoute=require('./app/routes/studentApiRoute')
app.use('/api/v1',studentApiRoute);


app.get('/about',(req,res)=>{
    res.send("about page")
})

app.get('/contact',(req,res)=>{
    res.send("contact page")
})



const port =3004


app.listen(port,()=>{
    console.log("server is running on port",port)
})
