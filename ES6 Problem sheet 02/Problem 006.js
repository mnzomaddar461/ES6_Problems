// Task 6: createIdGenerator() — Closures 
// Return a function that generates a new sequential ID starting from 1 each time it is called, using an internal counter with no global variable.
function createIdGenerator(){
    let count = 0
    return function(){
        count++
        return count
    };
}

const nextId = createIdGenerator()
console.log(nextId())
console.log(nextId())
console.log(nextId())