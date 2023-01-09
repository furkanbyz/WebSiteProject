// https://www.yusufsezer.com.tr/node-js-express/
// nodemon express.js için kuruldu

const express = require("express") // npm ile yüklenen express modülü çağrıldı
const data = require("./data.js")
const server = express() // çağrılan express modülü server adı ile tanımlandı
server.use(express.json()) //2 , buradan sonra postman'geç ve get request gönder
//gönderirken body raw ve json seçeneklerini kontrol et ve sonra terminalden çıktı al

server.get("/",(req,res) => { // url kısmına / yazılırsa aşağıdaki send fonksiyonu çalışıyor
    res.send("Express'ten merhaba selam") // / yazılmazsa da çalışıyor istisna olarak
})

server.get("/aktorler",(req,res) =>{  
    // buradaki server.get, tüm datalayı ekranda göstermek için
    // url konsoluna yukarıda belirttiğimiz /aktorler yazılırsa data.js içindeki veriler ekrana yazdırılır.
    res.status(200).json(data)
})

server.get("/aktorler/:id",(req,res) => {   // buradaki server.get ise tüm data içinden istenilen kaydı almak için
    //console.log("req.params",req.params) // ile aranan değerler, terminalde yazdırılır
    //console.log("req.query",req.query) // url konsoluna http://localhost:5000/aktorler/1?isim=kemal&soyisim=sunal&f%C4%B1lmturu=komedi yazıldı ve terminalden çıktı alındı
    console.log("req.body",req.body) //1 , 2 yukarıda
    const {id} = req.params
    const x = data.find((x) => x.id === parseInt(id)) // aktor, x olarak değiştirildi
    if (x){
        res.status(200).json(x)}
    else {
        res.status(404).send("aradığınız kayıt bulunamadı")
    }
})

server.listen(5000,() => { // http sunucu oluşturuldu
    console.log("http://localhost:5000 adresine gelen istekler dinleniyor") // nodejs terminal çıktısı
})
