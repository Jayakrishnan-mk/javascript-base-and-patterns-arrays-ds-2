let n = 4;

for (let i = 0; i < 3; i++) {
    outputString = ""
    for (let j = 0; j < 4; j++) {
        if (j === 2) {
            outputString += "\n"
        }
        outputString += "*"
    }
    console.log(outputString)

    outputString = ""
    for (let k = 0; k < n; k++) {
        outputString += "*"
    }
    console.log(outputString)
    n += 4
}



// let m = 4;
// let p;
// for (let i = 0; i < 9; i++) {
//     if(i % 3 === 2) {
//         p = m
//         m += 4
//     } else {
//         p = 2
//     }
//     outputString = ""
//     for (let j = 0; j < p; j++) {
//         outputString += "*"
//     }
//     console.log(outputString)
// }
