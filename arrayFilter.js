const arr = [1, 2, 3, 4, 5];

const users = [
    { firstName: "jay", lastName: "jk", age: 24 },
    { firstName: "Harry", lastName: "hh", age: 23 },
    { firstName: "Vel", lastName: "as", age: 35 },
    { firstName: "Ram", lastName: "vv", age: 28 },
]

// const output = arr.filter((x) => x > 2);   

// take the first name of person who has the age below 25.................
// let name = [];
// const output = users.filter((user) => {
//     if(user.age < 25) {
//         name.push(user.firstName)
//     }
// })
// console.log(name);

// take the first name of person who has the age below 25 using filter and map.................
// const output = users.filter(x => x.age < 25).map(x => x.firstName);

// take the first name of person who has the age below 25 using filter and reduce.................
const output = users.reduce((acc, curr) => {
    if (curr.age < 25) {
        acc.push(curr.firstName)
    }
    return acc;
}, [])

console.log('output', output);