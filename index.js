// express js server

const express = require('express');
const app = express(); // create instance of express js

const http = require('http');
const expressServer = http.createServer(app);
// express server created

// socket io require socket io modules import
const {Server}=require('socket.io'); // socket io er Server property import Server property is a class

const io = new Server(expressServer);

io.on('connection',()=>{

})

//loaded index html 
app.get('/',(_req,res)=>{
    res.sendFile(__dirname + '/index.html');
})




// run express server
expressServer.listen(3000,(_req,_res)=>{
    console.log('Server run at 3000');
})




