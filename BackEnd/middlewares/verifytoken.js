const jwt = require("jsonwebtoken")
module.exports = (request, response, next) => {
    const token = request.headers["x-access-token"] || request.body.token || request.query.token;
    if (!token)
        response.send("Token does not exist!");
    else {
        jwt.verify(token, request.app.get("api_secret_key"), (error, decoded) => {
            if (error)
                response.send("Unvalid token!");
            else {
                request.decode = decoded;
                console.log("Everything is okay.");
                //console.log("request.decode:",request.decode);
                //console.log("decoded:",decoded);
                next();
            }
        });
    }
};