// getEmployeeDept(employee) — Nested Destructuring 
// Given { name, job: { title, department } }, return { title, department } using nested destructuring.
function getEmployeeDept(employee){
    const {job: {title, department}} = employee
    // return `{title: "${title}", department: "${department}}"`
    return {title, department}
}

console.log(getEmployeeDept({ name: "Nadia", job: { title: "PM", department: "Product" } }))

