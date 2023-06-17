// let str = 'hello';
// let string = 'olleh';

// let stringArray = Array.from(string)

// function stringFunction() {

//     if (str.length !== string.length) {
//         return false;
//     }

//     let n = str.length;

//     for (let i = 0; i < n; i++) {
//         let flag = 0;
//         for (let j = 0; j < n; j++) {
//             if (str[i] == stringArray[j]) {
//                 stringArray.splice(j, 1);
//                 flag++;
//                 break;
//             }
//         }
//         if (flag == 0) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log('result', stringFunction());


let str = 'hello';
let string = 'olleh';

let stringArray = Array.from(string);

function stringFunction() {
    if (str.length !== string.length) {
        return false;
    }

    let charCount = {};

    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (let char of stringArray) {
        if (!charCount[char]) {
            return false;
        }
        charCount[char]--;
    }

    return true;
}

console.log('result', stringFunction());