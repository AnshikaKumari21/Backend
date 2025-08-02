//const fs = require('fs');

/*fs.writeFile("hey.txt","hello kaise ho",function(err){
    if(err) console.error(err);
    else console.log("done");
})*/

/*fs.appendFile("hey.txt"," My name is Anshika", function(err){
    if(err) console.error(err);
    else console.log("done");
})*/

/*fs.rename("hey.txt","hello.txt",function(err){
    if(err) console.error(err);
    else console.log("done");
})*/

/*fs.copyFile("hello.txt","./copy/copy.txt",function(err){
    if(err) console.error(err);
    else console.log("done");
})*/

/*fs.unlink("hello.txt",function(err){
    if(err) console.error(err);
    else console.log("removed");
})*/

/*fs.rm("./copy",{recursive: true},function(err){
    if(err) console.error(err);                     //{recursive:true}- will remove the folder even if some file is there, because .rm can only remove a folder which is empty
    else console.log("removed");
})*/

const http = require('http');
const server=http.createServer(function(req,res){
    res.end("hey hello");
})
server.listen(3000);
