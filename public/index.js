
$(function(){   

    let productlist=$('#product-list')

    fetchproducts(function(products){
        productlist.empty()
        for(let product of products){
            productlist.append(createproduct(product))
        }

    })

})