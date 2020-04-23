
function fetchproducts(done){
    $.get('/api/products',function(data){
        done(data)
    })

}


function createproduct(product){
    return $(`
     <div class="row">
        <div class="col-4 card mx-2 p-1">
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


$(function(){   

    let productlist=$('#product-list')

    fetchproducts(function(products){
        productlist.empty()
        for(let product of products){
            productlist.append(createproduct(product))
        }

    })

})