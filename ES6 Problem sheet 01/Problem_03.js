// Task 3: getLowestPrice(prices) — Spread Operator 
// Given an array of numbers, return the lowest price using Math.min combined with spread (no manual loop).
function getLowestPrice(prices){
    
    return Math.min(...prices);
}
const array = [340, 120, 560, 90] 
console.log(getLowestPrice(array));