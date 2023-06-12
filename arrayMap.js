const arr = [1, 2, 3, 4, 5];

const users = [
    { firstName: "jay", lastName: "jk", age: 24 },
    { firstName: "Harry", lastName: "hh", age: 23 },
    { firstName: "Vel", lastName: "as", age: 24 },
    { firstName: "Ram", lastName: "vv", age: 24 },
]

// const output = arr.map((x) => x * 2);

// take the fullName of everyone.........
const output = users.map((user) => `${user.firstName} ${user.lastName}`)

console.log(output);

