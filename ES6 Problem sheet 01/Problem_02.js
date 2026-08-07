// Task 2: buildProfileCard(user) — Template Literals 
// Given { name, title, company }, return a multiline string using template literal interpolation only.

function buildProfileCard(obj){
    return `"${obj.name} \n ${obj.title} at ${obj.company}"`;
}

const profileInfo = {
    name : "Naim",
    title : "Developer",
    company : "Upwork",
}

console.log(buildProfileCard(profileInfo));