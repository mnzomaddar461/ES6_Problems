// Task 7: sortByPriceAscending(products) — Callback Function 
// Given an array of product objects { name, price }, return a new array sorted from lowest to highest price using a comparator callback in sort().
let sortByPriceAscending = (products) => {
    // let sortProducts = sort(a -b)
    return products.sort((a,b) => a.price - b.price)
}

let products = [
    { name: "Bag", price: 500 },
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 60 }
] 

console.log(sortByPriceAscending(products))