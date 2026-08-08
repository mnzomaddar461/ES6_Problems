// Task 7: sumAllPrices(prices) — for...of 
// Given an array of numbers, return their sum using for...of.
function sumAllPrices(prices){
    let totalPrices = 0
    for(let sum of prices){
        totalPrices += sum;
    }
    return totalPrices
}

console.log(sumAllPrices([100, 250, 75]))