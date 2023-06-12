// Ascending order
let a = [5, 4, 8, 2, 3, 9]
for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
        if (a[i] < a[j]) {

            // swap doesn't work in js
            // a[i], a[j] = a[j], a[i]

            // using temp
            // temp = a[i]
            // a[i] = a[j]
            // a[j] = temp

            // without using third variable
            a[i] = a[i] + a[j]
            a[j] = a[i] - a[j]
            a[i] = a[i] - a[j]
        }
    }
}
console.log(a)