let ar = [];

let n1 = 0;
let n2 = 1;
let fib = [];

for (let i = 1; i <= 50; i++) {
   let nt = n1+n2;
   n1 = n2;
   n2 = nt;
   
   fib.push(n1)
}

console.log(fib);