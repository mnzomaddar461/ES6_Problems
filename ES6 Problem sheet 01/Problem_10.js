// Task 10:  cloneAndUpdate(arr, index, newValue) — Spread (Immutable Array 
// Update) Return a new array with the value at index replaced by newValue, without mutating the original array.
function cloneAndUpdate(arr, index, newValue){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === arr[index]){
            arr[i] = newValue;
        }
    }

    return arr
}

console.log(cloneAndUpdate([5, 10, 15], 1, 99))