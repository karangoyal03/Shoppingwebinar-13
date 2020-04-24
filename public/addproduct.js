$(function(){
    let ProductName =$('#ProductName')
    let ProductManufacturer = $("#ProductManufacturer");
    let ProductPrice = $("#ProductPrice");

    $('#add').click(()=>{
        addproduct(
            ProductName.val(),
            ProductManufacturer.val(),
            ProductPrice.val()
            ,function(addedproduct){
                window.alert('Added'+addedproduct.name+'to database')

            }
        )
    })

})