const express = require('express')
const path =require('path')
const apiroute=require('./routes/api').route


const app=express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/',express.static(path.join(__dirname,'public')))

app.use('/api',apiroute)



app.listen(6767,()=>{
    console.log('server has started')
})