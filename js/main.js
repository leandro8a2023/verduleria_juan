console.log(123);

let products= []

function init(){
    addProduct("manzana", 100, "manzana roja")
    addProduct("manzana", 150, "manzana verde")
    addProduct("naranaja", 120, "naranja de ombligo")
    addProduct("banana", 200, "banana del ecuador")
    addProduct("tomate", 5, "tomate redondo")
    addProduct("tomate", 100, "tomate perita")
    addProduct("manzana 2", 100, "manzana roja")
    addProduct("manzana 2", 150, "manzana verde")
    addProduct("naranaja 2", 120, "naranja de ombligo")
    addProduct("banana 2", 200, "banana del ecuador")
    addProduct("tomate 2", 50, "tomate redondo")
    addProduct("tomate 2", 100, "tomate perita")
    drawProductsList(products)
}


function addProduct(name, price, description){
    let product = new Object()
    product.name = name
    product.price = price
    product.description = description

    products.push(product)
}

function drawProductsList(array_products) {
    $("#product-list").html("")
    let products_length = array_products.length
    for (let i = 0; i < products_length; i++) {
        let product_name = $('<h3>').html(array_products [i].name)
        let product_description = $('<em>').html (array_products[i].description)
        let product_price = $('<div>').html("$" + array_products [i].price.toFixed(2))
            .addClass("text-right")
            console.log(array_products[i])
    
        let product_box = $("<div>")
        .addClass("product_box")
        .append(product_name, product_description, product_price)
        

        let col = $('<div>')
            .addClass("col-sm-3")
            .append(product_box)
        $('#product-list').append(col)
    }
}
$("#search").on("keyup", function(e){
    let filtered_products = products.filter((value, index) => {

        return (value.name.indexOf($(this).val())) > -1
    })
    
    drawProductsList(filtered_products)
})


init()


