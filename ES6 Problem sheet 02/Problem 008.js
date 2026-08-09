// Task 8: applyBonusPoints(users, bonus) — Pass by Reference vs Value 
// Return a NEW array of users with points increased by bonus, without mutating the original array or its objects.
let applyBonusPoints = (users, bonus) =>{
    return users.map((user) => ({
        ...user,
        points: user.points + bonus
    }))
}

let users = [{ name: "Rafi", points: 20 }]
console.log(applyBonusPoints(users, 5));
