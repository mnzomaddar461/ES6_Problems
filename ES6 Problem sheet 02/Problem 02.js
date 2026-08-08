//  Problem 2: Passing Students Filter
//   getPassingStudents(students, threshold) — return only the students
//   whose marks are greater than or equal to the given threshold.

let getPassingStudents = (students, threshold) => {
    let filteringStudents = students.filter((students) => {
        return students.marks >= threshold
    })
    return filteringStudents
};

let students = [
    {name : "Naim", marks : 75},
    {name : "Jannatul", marks : 80},
    {name : "Xyz", marks : 54},
    {name : "Pqr", marks : 34},
]

console.log(getPassingStudents(students, 60))