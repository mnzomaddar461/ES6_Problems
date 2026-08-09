//   Problem: Filtered Cart Total (Chaining filter -> map -> reduce)
//   getExpensiveItemsTotal(cart, minPrice) — from the cart, keep only
//   items priced at or above minPrice, then calculate the total cost
//   (price * qty) of just those items — all in ONE chained expression.

let getExpensiveItemsTotal = (cart, minPrice) =>{
    let total = cart
    .filter((product) => product.price >= minPrice)
    .map((product) => product.price * product.qty)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    return total;
}

let cart = [
    {name : "Pen", price : 20, qty : 5},
    {name : "Calculato", price : 2200, qty : 1},
    {name : "Perfume", price : 1000, qty : 1},
]

console.log(getExpensiveItemsTotal(cart, 300))