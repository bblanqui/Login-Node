const express = require("express");
const Router = express.Router()
//controllers
const {register, getUser, login} = require("./controller/userController")


Router.post("/register", register)
Router.get("/users", getUser)
Router.post("/login", login)



module.exports = Router