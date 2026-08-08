// Problem 1: User Lookup by ID
//   findUserById(users, id) — find and return the single user object
//   whose id matches. If no user matches,returns "User not found".

const findUserById = (users, id) =>{
    let expactedID = users.find((user) =>{
        return user.id === id
    })
    if(!expactedID) return "User not found"
    return expactedID
}

let users = [
    { id: 1, name: "Rafi" },
    { id: 2, name: "Karim" },
    { id: 3, name: "Utsho" },
    { id: 4, name: "Rahim" },
];
console.log(findUserById(users, 2));