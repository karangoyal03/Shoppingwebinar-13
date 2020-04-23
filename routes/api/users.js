const User =require('../../db').User
const route =require('express').Router()


//hum yahan pr array print krana chate h saare users ka
route.get('/',(req,res)=>{


    //findall function use hota h saare users ko find out krne ke liye 
    //yeh promise h toh .then .catch se handle hoga 
    User.findAll()
    .then((users)=>{
        res.status(200).send(users)

    })
    .catch((err)=>{
        res.status(500).send({
            error:"Could not retrive users"
        })

    })

})

route.post('/',(req,res)=>{
    User.create({
        name: req.body.name
    })
    .then((user)=>{
        res.status(201).send(user)

    })
    .catch((err)=>{
        res.status(501).send({
          error: "Could not add new user"
        });
    })

})



exports = module.exports = route