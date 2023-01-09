let data = require("../../datas/drawers.js")

let nextid = 5
const drawersPost =(req,res,next) => {
    //res.send("employeeRouter post...")
    let newdrawer = req.body

    if (!newdrawer.isim) {
        console.log("if");
        next({
            statusCode: 404,
            errorMessage: "You should add a 'isim'"
        })
        //res.send("post/if")
    }
    else if (newdrawer.isim && !newdrawer.tablolar) {
        //console.log("elseif");
        next({
            statusCode: 400,
            errorMessage: "You should add a 'tablolar'"
        })
        //res.send("post/elseif")
    }
    else {
        console.log("else");

        newdrawer.id = nextid
        nextid++
        data.push(newdrawer)

        res.status(201)
            .json(data)
            
        console.log(newdrawer);
        next()
    }   
    //next()
}

module.exports={drawersPost}