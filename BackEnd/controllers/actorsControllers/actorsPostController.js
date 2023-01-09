let data = require("../../datas/actors.js")

let nextid = 6
const actorsPost =((req,res,next) => {
    //res.send("employeeRouter post...")
    let newactor = req.body

    if (!newactor.isim) {
        next({
            statusCode: 404,
            errorMessage: "You should add a 'isim'"
        })
    }

    else if (newactor.isim && !newactor.filmler) {
        next({
            statusCode: 400,
            errorMessage: "You should add a 'filmler'"
        })
    }

    else {
        newactor.id = nextid
        nextid++
        data.push(newactor)

        res.status(201)
            .json((newactor))
            
        console.log("newactor:",newactor);
        next()
    }   
})

module.exports={
    actorsPost
}