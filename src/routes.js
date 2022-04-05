const express = require("express");
const Router = express.Router()
// importacion de controllers
const {register, getUser, login} = require("./controller/userController")

/* creacion de los endpoints */

Router.post("/register", register)
Router.get("/users", getUser)
Router.post("/login", login)



module.exports = Router