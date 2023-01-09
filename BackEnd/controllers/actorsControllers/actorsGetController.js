let data = require("../../datas/actors.js")

const actorsGet = (req,res,next) => {
    console.log("GELDİ 1");
        res.status(200).json(data)
}

const actorsGetwithId = (req,res,next) => {
    console.log("GELDİ 2");
    const { id } = req.params
    const x = data.find((x) => x.id == parseInt(id))
    if (x) {
        res.status(200).json(x)
    }
    else {
        res.status(404).send("not found data that you want to get")
    }
}


module.exports={
    actorsGet,
    actorsGetwithId
}