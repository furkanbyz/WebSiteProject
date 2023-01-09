const router = require("express").Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const userModel = require("../datas/user")


router.post("/getToken", (request, response, next) => {
    console.log("logged in...");
    const { userName, password } = request.body;
    
    const payLoad = {
        userName,
        password,
        email: "nodejsapi@gmail.com"
    };
    console.log("payload:",payLoad);
    
    // 300000 ms is equal to 5 mins.
    const token = jwt.sign(payLoad, request.app.get("api_secret_key"), 
                        { expiresIn: 300000 });
    response.json({
        status: true,
        token
    });
    console.log("token:",token);
});


module.exports= router