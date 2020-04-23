const route=require('express').Router()
// const userroute =require('./users')

// const productroute=require('./products')

route.use("/users", require("./users"));

route.use("/products", require("./products"));



exports = module.exports={
    route
}