const arr = [1, 2, 3, 4, 5];

const users = [
    { firstName: "jay", lastName: "jk", age: 24 },
    { firstName: "Harry", lastName: "hh", age: 23 },
    { firstName: "Vel", lastName: "as", age: 26 },
    { firstName: "Ram", lastName: "vv", age: 24 },
]

// const output = arr.reduce((acc, curr) => acc+curr, 0);

// ......... REDUCE IS USING WHENEVER WE ARE RETURNING A SINGLE VALUE.........................

// sum of array using reduce......................
// const output = arr.reduce((acc, curr) => {
//     return acc+curr
// },0);

// largest number of array using reduce............
// const output = arr.reduce((lar, curr) => {
//     if (curr > lar) {
//         lar = curr;
//     }
//     return lar;
// }, 0);
// console.log('result', output);


// return unique age and count using reduce............
const output = users.reduce((acc, curr) => {
    if(acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age];
    }
    else {
        acc[curr.age] = 1;
    };

    return acc;
}, {})

console.log('result', output);


