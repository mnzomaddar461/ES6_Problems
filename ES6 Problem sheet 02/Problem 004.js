// Task 4: getTotalStockValue(products) — reduce() 
// Given an array of products { price, stock }, return the total value of all stock combined (price × stock, summed).
let getTotalStockValue = (products) => {
    const totalPriceInStock = products.reduce((accumulator, product) => {
        return accumulator + (product.price * product.stock)
    }, 0)
    return totalPriceInStock
}

let products = [
    { price: 50, stock: 4 },
    { price: 20, stock: 10 }
]

console.log(getTotalStockValue(products))