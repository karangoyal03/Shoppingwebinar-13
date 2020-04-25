function fetchproducts(done) {
  $.get("/api/products", function (data) {
    done(data);
  });
}
function addproducts(name,manufacturer,price,done){
  $.post('/api/products',{
    name:name,
    manufacturer:manufacturer,
    price:price
  },function(data){
    done(data);
  })
}

function createproduct(product) {
  return $(`
     <div class="row">
        <div class="col-8 card mx-2 p-1" style="width:400px;">
          <h4 class="product-name">${product.name}</h4>
          <div class="product-manufaturer">
            ${product.manufacturer}
          </div>
          <div class="product-price">
          ${product.price}
          </div>
          <button class="btn btn-primary">BUY</button>
        </div>`);
}
