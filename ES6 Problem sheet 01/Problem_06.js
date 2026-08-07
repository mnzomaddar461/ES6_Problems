// Task 6: promoteEmployee(employee, newTitle) — Spread + Immutable Update 
// Return a NEW employee object with title updated to newTitle. Original object must remain unchanged.
function promoteEmployee(employee, newTitle){
    employee.title = newTitle;
    const {name, title} = employee
    return {name, title}
}

// function promoteEmployee(employee, newTitle) {
//     return {
//         ...employee,
//         title: newTitle // title ওভাররাইট বা আপডেট হবে
//     };
// }

// function promoteEmployee(employee, newTitle) {
//     const { name } = employee;
//     return { name, title: newTitle };
// }

console.log(promoteEmployee({ name: "Rafi", title: "Junior Dev" }, "Senior Dev"))