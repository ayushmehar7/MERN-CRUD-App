const express = require("express")
const routes = express.Router()
const {createUser,findUser,updateUser,deleteUser} = require("../controller/user")

routes.post("/createUser",createUser)
routes.get("/findUser/:userId",findUser)
routes.put("/updateUser/:userId",updateUser)
routes.delete("/deleteUser/:userId",deleteUser)
module.exports = routes;
