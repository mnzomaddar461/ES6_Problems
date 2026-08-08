// Task 9: splitFirstRest(arr) — Rest Syntax 
// Return { first, rest } where first is the first element and rest is an array of all remaining elements.
function splitFirstRest(arr){
    const [frist, ...rest] = arr
    return {frist, rest}
}

console.log(splitFirstRest([10, 20, 30, 40]))