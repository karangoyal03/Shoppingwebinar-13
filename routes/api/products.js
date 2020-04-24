const route = require("express").Router();
const Product = require("../../db").Product;

route.get("/", (req, res) => {
  Product.findAll()
    .then((products) => {
      res.status(200).send(products);
    })
    .catch((err) => {
      res.status(500).send({
        error: "could not found products",
      });
    });
});

route.post("/", (req, res) => {
  //valiadate the pricing
  if (isNaN(req.body.price)) {
    return res.status(403).send({
      error: "Price is not valid number",
    });
  }

  //creating a new product
  Product.create({
    name: req.body.name,
    manufacturer: req.body.manufacturer,
    price: parseFloat(req.body.price),
  })
    .then((product) => {
      res.status(201).send(product);
    })
    .catch((error) => {
      res.status(501).send({
        
        error: "product could not be added"
      });
    });
});

exports = module.exports = route


