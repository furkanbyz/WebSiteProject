const express = require("express") // npm ile yüklenen express modülü çağrıldı
let routingtest = require("./denemeroutingtest.js")
const server = express() // çağrılan express modülü server adı ile tanımlandı
//server.use(express.json()) //2 , buradan sonra postman'geç ve get request gönder
//gönderirken body raw ve json seçeneklerini kontrol et ve sonra terminalden çıktı al
server.use(express.json())
server.use("/aktorler",routingtest)


server.get("/",(req,res) => { // url kısmına / yazılırsa aşağıdaki send fonksiyonu çalışıyor
    res.send("Express'ten merhabalar...") // / yazılmazsa da çalışıyor istisna olarak
})


server.listen(5000,() => { // http sunucu oluşturuldu
    console.log("http://localhost:5000 adresine gelen istekler dinleniyor") // nodejs terminal çıktısı
})

