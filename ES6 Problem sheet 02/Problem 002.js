// Task 2: getAvailableProducts(products) — filter() 
// Given an array of product objects { name, stock }, return only the products where stock is greater than 0.
let getAvailableProducts = (products) => {
    const filteringProductInStock = products.filter((product) =>{
        return product.stock > 0
    })
    return filteringProductInStock
}

let availableProduct = [{ name: "Pen", stock: 5 },
    { name: "Bag", stock: 0 },
    { name: "Notebook", stock: 2 }] 

console.log(getAvailableProducts(availableProduct))