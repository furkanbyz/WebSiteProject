const router = require("express").Router()
const writersDelete= require("../controllers/writersControllers/writersDeleteController.js")
const writersPost = require("../controllers/writersControllers/writersPostController.js")
const writersPut = require("../controllers/writersControllers/writersPutController.js")
const writersGet= require("../controllers/writersControllers/writersGetControllers.js")

router.get("/get", writersGet.writersGet)

router.get("/get/:id", writersGet.writersGetwithId)

router.post("/post", writersPost.writersPost)

router.put("/put/:id", writersPut.writersPut)

router.delete("/delete/:id", writersDelete.writersDelete)



module.exports = router