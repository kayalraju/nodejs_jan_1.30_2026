const http = require('http');


const port=3000;
http.createServer(function(req,res){
    res.write("<h1>welcome to webskitters</h1>");
    res.end();
}).listen(port,function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("server is running on port",port);
    }
});