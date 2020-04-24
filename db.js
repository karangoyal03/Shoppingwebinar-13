const Sequelize =require('sequelize')

//defining a database class like structure 
const db = new Sequelize('shopdb','shopper','shoppass',{
    host:'localhost',
    dialect:'mysql',
    pool:{
        min:0,
        max:5
    }
})


//with db as class like structure we are creating instance of a class 
// these will be are different models or tables which we are defining with our database

const User =db.define('users',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    }
})


const Product =db.define('products',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    manufacturer:{
        type:Sequelize.STRING,
        allowNull:false
    },
    price:{
        type:Sequelize.FLOAT,
        defalutValue:0.0,
        allowNull:false
    }
})


db.sync()
.then(()=>{
    console.log('database craeted successfully')
})
.catch((err)=>{
    console.error('error creating database')
})


exports =module.exports={
    User,Product
}