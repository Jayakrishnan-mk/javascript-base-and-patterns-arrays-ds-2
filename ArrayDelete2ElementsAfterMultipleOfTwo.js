// let ar = [1, 2, 5, 2, 2, 3, 10, 2, 2, 2, 2, 15, 1, 1, 1, 20, 1];

// for (let i = 0; i < ar.length; i++) {
//     if(ar[i] % 5 == 0) {
//         ar.splice(i+1, 2)
//     }
// }
// console.log('ar', ar);






let ar = [1, 2, 5, 6, 7, 8, 10, 12];
let n = ar.length;
let temp;

for (let i = 0; i < n; i++) {
    if (ar[i] % 5 == 0) {
        for (j = i + 1; j < n; j++) {
            // temp = ar[j];
            ar[j] = ar[j + 1];
            // ar[j + 1] = temp;
        }
        n--;
    }
}
ar.length = n;
console.log('ar', ar);