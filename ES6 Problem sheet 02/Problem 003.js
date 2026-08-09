// Task 3: findProductByName(products, name) — find() 
// Given an array of product objects, return the first product matching the given name, or undefined if not found.

let findProductByName = (products, name) =>{
    const foundedProduct = products.find((product) => {
        return product.name === name
    })
    return foundedProduct || "Not Found !"
}


let products = [
    { name: "Pen", price: 10 },
    { name: "Bag", price: 500 }
]

console.log(findProductByName(products, "Bag"))