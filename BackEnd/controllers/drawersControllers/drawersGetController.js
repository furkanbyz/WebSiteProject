let data = require("../../datas/drawers.js")

const drawersGet =(req,res,next) => {
    res.status(200).json(data)
    //res.status(200).json(data)

    //next()
}
const drawersGetwithId =(req,res,next) => {
    const { id } = req.params
    const x = data.find((x) => x.id == parseInt(id))
    if (x) {
        res.status(200).json(x)
    }
    else {
        res.status(404).send("not found data that you want to get")
    }
}

module.exports={drawersGet,drawersGetwithId}