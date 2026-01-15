const express=require('express')
const path=require('path')


console.log(path);


const app=express();


app.get('/',(req,res)=>{
    res.send("home page")
})

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
