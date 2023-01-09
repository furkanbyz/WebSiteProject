const router = require("express").Router();
const actorsDelete = require("../controllers/actorsControllers/actorsDeleteController.js");
const actorsGet = require("../controllers/actorsControllers/actorsGetController.js")
const actorsPost = require("../controllers/actorsControllers/actorsPostController.js");
const actorsPut = require("../controllers/actorsControllers/actorsPutController.js");


router.get("/get", actorsGet.actorsGet)

  
router.get("/get/:id",actorsGet.actorsGetwithId)
   

router.post("/post",actorsPost.actorsPost)


router.put("/put/:id", actorsPut.actorsPut) 
  

router.delete("/delete/:id",actorsDelete.actorsDelete)
  

module.exports=router
