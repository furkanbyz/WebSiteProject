// const express = require("express")
// const app = express()
// const server = require("http").createServer(app)
// const io = require("socket.io")(server, {
//     cors:{
//         origin:"*",
//     }
// })

// io.on("connection",(client) => {
//     console.log("client connected");

//     setInterval(() => {
//         client.emit("newMessage", new Date().toString())
//     },1000)

//     client.on("disconnected", () => {
//         console.log("client disconnected");
//     });
// });

// server.listen(3000, () => {
//     console.log("socket.io inlenitrkgdf");
// })