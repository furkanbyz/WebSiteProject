// var websocket = require("ws").Server
// var ws = new websocket({port:8081})

// ws.on("connection" , function(socket){
//     console.log("new client connected");

//     socket.on("message",function () {

//         ws.clients.forEach(function each(client){
//             client.send("data")
//         })
//     })

//     socket.on("close", function () {
//         console.log("client closed");
        
//     })
// })

// const brodcast = function(){
//     ws.clients.forEach(function each(client) {
//         client.send("new data")
//     })
// }

// setInterval(brodcast,1000)