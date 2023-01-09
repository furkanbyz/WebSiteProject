/*// https://www.yusufsezer.com.tr/node-js-express/
// nodemon express.js için kuruldu

const express = require("express") // npm ile yüklenen express modülü çağrıldı
let data = require("./data.js")
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

let nextid=4
server.post("/aktorler",(req,res) => { //postman üzerinden bir veriyi url'ye post etme
    let yeniaktor = req.body
    yeniaktor.id = nextid
    nextid++
    data.push(yeniaktor)
    res.status(201).json(yeniaktor)
})

server.delete("/aktorler/:id",(req,res) => { 
    console.log("ggg geldi")
    const silinecekaktorid = req.params.id
    const silinecekaktor = data.find(aktor => aktor.id === Number(silinecekaktorid)
    )

    if(silinecekaktor) {
        data=data.filter((aktor) => aktor.id !== Number(silinecekaktorid))
        res.status(204).end()}
    else {
        res
            .status(404)
            .json({ errorMessage : "silmeye çalistiginiz veri sistemde yok..."})}
})


server.get("/aktorler/:id",(req,res) => {   // buradaki server.get ise tüm data içinden istenilen kaydı almak için
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

server.listen(5000,() => { // http sunucu oluşturuldu
    console.log("http://localhost:5000 adresine gelen istekler dinleniyor") // nodejs terminal çıktısı
})
*/




const express = require("express")
//let data = require("C:\Users\win10\Desktop\nodejsapi\data.js")
let data = require("./data.js")
const server=express()
server.use(express.json()) 

server.get("/",(req,res) => {
    res.send("Welcome to my practise time")
})
server.get("/aktorler",(req,res) => {
    console.log("entered getting all data loop")

    res.status(200).json(data)
})
server.get("/aktorler/:id",(req,res) => {
    console.log("entered getting data loop")

    const {id}= req.params
    const x = data.find((x) => x.id === parseInt(id))
    if(x){
        res.status(200).json(x)
    }
    else {
        res.status(404).send("not found data that you looking for")}
})


server.delete("/aktorler/:id",(req,res) => {
    console.log("entered delete loop")
    const silinecekaktorid =req.params.id
    const silinecekaktor = data.find(aktor => aktor.id === Number(silinecekaktorid))

    if(silinecekaktor){
        data=data.filter((aktor) => aktor.id !== Number(silinecekaktorid))
        res.status(204).end()
    }
    else {
        res.status(404)
        res.json({ errorMessage : "There is no data which is like that you are trying to find" })
    }
})

let nextid=4
server.post("/aktorler",(req,res) =>{
    let yeniaktor = req.body
    yeniaktor.id=nextid
    nextid++
    data.push(yeniaktor)
    res.status(201).json(yeniaktor)
})

server.listen(3000,() => {
    console.log("Requests which came to address of http://localhost:3000 are listening")
})
