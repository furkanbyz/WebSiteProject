const router = require("express").Router();
const drawersGetController  = require("../controllers/drawersControllers/drawersGetController");
const drawersDeleteController  = require("../controllers/drawersControllers/drawersDeleteController");
const drawersPutController  = require("../controllers/drawersControllers/drawersPutController");
const drawersPostController  = require("../controllers/drawersControllers/drawersPostController");


router.get("/get", drawersGetController.drawersGet)

router.get("/get/:id", drawersGetController.drawersGetwithId)


router.post("/post",drawersPostController.drawersPost)

router.put("/put/:id", drawersPutController.drawersPut)

router.delete("/delete/:id", drawersDeleteController.drawersDelete)


module.exports=router
