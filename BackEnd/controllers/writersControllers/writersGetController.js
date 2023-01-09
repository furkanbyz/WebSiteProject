let data = require("../../datas/writers.js")

const writersGet = (req,res) => {
    res.status(200).json(data)
}

const writersGetwithId = (req,res) => {
    const{id}=req.params
    const x = data.find((x) => x.id == parseInt(id))

    if(x){
        res.status(200).json(x)}
    else{
        res.status(404).send("not found data that you want to get")
    }
}

module.exports={
    writersGet,
    writersGetwithId
}