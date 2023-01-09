let data = require("../../datas/writers.js")

let nextid=5
const writersPost = (req,res,next) => {
    let newwriter = req.body
    
    if (!newwriter.isim) {
        next({
            statusCode: 400,
            errorMessage: "You should add a 'isim'"
        })
    }
    else if (newwriter.isim && !newwriter.kitaplar) {
        next({
            statusCode: 400,
            errorMessage: "You should add a 'kitaplar'"
        })
    }
    
    else {
        newwriter.id = nextid
        nextid++

        data.push(newwriter)

        res.status(201).json(newwriter)
    }

    
}

module.exports={writersPost}