const express = require("express")
const server = express()
const bodyParser = require("body-parser");
const cors = require("cors")

const http = require("http").createServer(server);
const io = require("socket.io")(http);

//MIDDLEWARES
const logger = require("./middlewares/logger");
const errorHandling = require("./middlewares/errorHandling");
let verifytoken = require("./middlewares/verifytoken")

//ROUTERS
let tokenrouter = require("./routers/tokenrouter")
let actorsRouter = require("./routers/actorsRouter")
let drawersRouter = require("./routers/drawersRouter")
let writersRouter = require("./routers/writersRouter")




let dateTime = new Date();
let currTime = dateTime.getHours() + ":" + dateTime.getMinutes() + ":" + dateTime.getSeconds();
io.on("connection", (socket) => {
    console.log("bir kullanıcı bağlandı!");
  
    setInterval(() => {
      dateTime = new Date()
      currTime = dateTime.getHours() + ":" + dateTime.getMinutes() + ":" + dateTime.getSeconds();
      socket.emit("receive", currTime);
      socket.broadcast.emit("receive", currTime);
    }, 10)
  
  
    socket.on("disconnect", () => {
      console.log("Bir kullanıcı ayrıldı.");
    });
  });



  
server.set("api_secret_key", require("./config").api_secret_key)
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: true}))
server.use(express.json()) 
server.use(logger);
server.use(cors())
//server.use(errorHandling);

//CALLING ROUTERS
server.use("/token",tokenrouter)

server.use("/api/actors",verifytoken)
server.use("/api/actors", actorsRouter)

server.use("/api/drawers",verifytoken)
server.use("/api/drawers", drawersRouter)

server.use("/api/writers",verifytoken)
server.use("/api/writers", writersRouter)


server.get("/",(req,res) => {
    res.send("WELCOME TO KITAPYURDU.COM")
})


server.listen(4000,()=>{
    console.log("http://localhost:4000 port is being listening...") // nodejs terminal çıktısı
})