let ar = [1, 2, 3, 4, 5, 6];
let sum = 0;
for (let i = 0; i < ar.length; i++) {
    if (ar[i] % 2 == 0) {
        sum = sum + ar[i];
        ar[i] = "n";
    }
}
console.log('sum', sum);
console.log('ar', ar);