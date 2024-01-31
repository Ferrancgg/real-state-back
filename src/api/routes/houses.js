const { getHouses, getHousesById, postHouses, putHouses, deleteHouses } = require("../controllers/houses")

const housesRoutes=require("express").Router()


housesRoutes.get("/",getHouses)
housesRoutes.get("/:id",getHousesById)
housesRoutes.post("/",postHouses)
housesRoutes.put("/:id",putHouses)
housesRoutes.delete("/:id",deleteHouses)

module.exports={housesRoutes}