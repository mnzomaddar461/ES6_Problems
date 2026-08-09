// Task 1: getFormattedPrices(prices) — map() 
// Given an array of numbers, return a new array where each price is formatted as a string prefixed with "$".
function getFormattedPrices(prices){
    let afterPrefixed = prices.map((price) => {
        return `$${price}`
    })
    return afterPrefixed;
}

let price = [200, 600, 309, 204];
console.log(getFormattedPrices(price))