let data = require("../../datas/actors.js")

const actorsPut = ((req, res,next) => {
    console.log("entered put");
    const updatedata = req.body

    if(updatedata.isim){
        data.find(o => {
            if (o.id == req.params.id) { //data.id === dışarıdan sorgulanan verinin
                o.isim = updatedata.isim
                o.filmler = updatedata.filmler
            }
        }) 
        console.log("updated data:", updatedata);
        res
            .status(200)
            .send(JSON.stringify({ "sonuc": true }))
        return

    }
    else{
        next({
            statusCode: 400,
            errorMessage: "You should add a 'isim'"
        })

    }
})

module.exports={actorsPut}