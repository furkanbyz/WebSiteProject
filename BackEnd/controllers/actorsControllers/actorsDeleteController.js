let data = require("../../datas/actors.js")

const actorsDelete = ((req, res) => {
    const deleteid = req.params.id

    var findData = index = data.findIndex(x => x.id == deleteid);

    if (findData > -1) {
        data.splice(findData, 1);
        res.status(200)
            .send(data)
            .end() 
    }
    else {
        res
            .status(404)
            .send("not found data that you want to delete")
    }
})

module.exports = { actorsDelete }