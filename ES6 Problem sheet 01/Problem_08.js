// Task 8: getManagerName(employee) — Optional Chaining 
// Given an employee object that may or may not have a manager property, return the manager's name safely, or undefined if missing.
function getManagerName(employee){
    return employee?.manager?.name
}

console.log(getManagerName({ name: "Mim", manager: { name: "Tanvir" } }))