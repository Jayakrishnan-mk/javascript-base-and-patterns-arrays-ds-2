let b = 2;
let c = 1;
for (let a = 1; a <= 3; a++) {
    let str = "";
    for (let i = 1; i <= b; i++) {
        str += "*";
        if (i == b) console.log(str);
    }
    b = b * 2;

    for (let j = 1; j <= c; j++) {
        console.log("*");
    }
    c = c + 2;
}