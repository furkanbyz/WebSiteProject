const router = require("express").Router()
let data = require("./data.js")
router.get("/",(req,res) =>{  
    // buradaki server.get, tüm datalayı ekranda göstermek için
    // url konsoluna yukarıda belirttiğimiz /aktorler yazılırsa data.js içindeki veriler ekrana yazdırılır.
    res.status(200).json(data)
})

let nextid=4
router.post("/",(req,res) => { //postman üzerinden bir veriyi url'ye post etme
    let yeniaktor = req.body
    yeniaktor.id = nextid
    nextid++
    data.push(yeniaktor)
    res.status(201).json(yeniaktor)
})

router.delete("/delete/:id",(req,res) => {  
    const silinecekaktorid = req.params.id
    const silinecekaktor = data.find(aktor => aktor.id === Number(silinecekaktorid)
    )

    if(silinecekaktor) {
        data=data.filter((aktor) => aktor.id !== Number(silinecekaktorid))
        res.status(204).end()
    
        console.log(data);
    }
    else {
        res
            .status(404)
            .json({ errorMessage : "silmeye çalistiginiz veri sistemde yok..."})}
})


router.get("/:id",(req,res) => {   // buradaki server.get ise tüm data içinden istenilen kaydı almak için
    //console.log("req.params",req.params) // ile aranan değerler, terminalde yazdırılır
    //console.log("req.query",req.query) // url konsoluna http://localhost:5000/aktorler/1?isim=kemal&soyisim=sunal&f%C4%B1lmturu=komedi yazıldı ve terminalden çıktı alındı
    //console.log("req.body",req.body) //1 , 2 yukarıda

    const {id} = req.params
    const x = data.find((x) => x.id === parseInt(id)) // aktor, x olarak değiştirildi
    if (x){
        res.status(200).json(x)}
    else {
        res.status(404).send("aradığınız kayıt bulunamadı")
    }
})


module.exports = router