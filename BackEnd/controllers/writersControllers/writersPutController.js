let data = require("../../datas/writers.js")

const writersPut =(req,res,next) => {
    console.log("entered put");
    const updatedata = req.body

    if(updatedata.isim){
        data.find(o => {
            if (o.id == req.params.id) {
                o.isim = updatedata.isim
                o.kitaplar = updatedata.kitaplar
            }
        })
    
        console.log("updated data:", updatedata);
        res
            .status(200)
            .send("data was updated successfully!")
        return

    }
    else{
        next({
            statusCode: 400,
            errorMessage: "You should add a 'isim'"
        })

    }
    /*
    data.find(o => {
        if (o.id == req.params.id) {
            o.isim = updatedata.isim
            o.kitaplar = updatedata.kitaplar
        }
    })

    console.log("updated data:", updatedata);
    res
        .status(200)
        .send("data was updated successfully!")
    return
    */
}

module.exports={writersPut}