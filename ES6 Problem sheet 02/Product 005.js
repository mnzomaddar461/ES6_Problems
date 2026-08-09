// Task 5: getDiscountedTotalForCategory(products, category) — Chaining map + filter + reduce 
// Given an array of products { name, category, price }, return the total price of all products in the given category after applying a 10% discount to each.

let getDiscountedTotalForCategory = (products, category) => {
    const totalPricefilteringByCategoryWithDiscount = products
    .filter((product) => product.category === category)
    .map((product) => product.price - (product.price * 10)/ 100)
    .reduce((accumulator, currentPrice) => accumulator + currentPrice,0)
    return totalPricefilteringByCategoryWithDiscount
}

let products = [
    { name: "Pen", category: "stationery", price: 100 }, 
    { name: "Bag", category: "accessory", price: 500 }, 
    { name: "Notebook", category: "stationery", price: 60 }
]

console.log(getDiscountedTotalForCategory(products, "stationery"))