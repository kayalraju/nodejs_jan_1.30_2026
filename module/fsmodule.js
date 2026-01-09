const fs=require('fs');


//path module
 const path=require('path');

 //console.log('path module', path);
 
 const pathobj=path.parse(__filename);
 console.log(pathobj);

//create  file
// fs.writeFile('demo.txt','hello welcome to webskitters',function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('File created successfully');
//     }
// });

// //read file
// fs.readFile('demo.txt','utf-8',function(err,data){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('data',data);
//     }
// });


//update file
// fs.appendFile('demo.txt','hello welcome to webskitters, my name is rahul',function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('File updated successfully');
//     }
// });