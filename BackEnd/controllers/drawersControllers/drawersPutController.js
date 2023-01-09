let data = require("../../datas/drawers.js")

const drawersPut =(req, res,next) => {
    console.log("entered put");
    const updatedata = req.body

    if(updatedata.isim){
        data.find(o => {
            if (o.id == req.params.id) { //data.id === dışarıdan sorgulanan verinin
                o.isim = updatedata.isim
                o.tablolar = updatedata.tablolar
            }
        })
    
        console.log("updated data:", updatedata);
        res
            .status(200)
            .send(data)
        return

    }
    else{
        next({
            statusCode: 400,
            errorMessage: "You should add a 'isim'"
        })

    }
}


module.exports={drawersPut}