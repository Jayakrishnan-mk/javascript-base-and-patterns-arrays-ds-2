
for (let a = 1; a <= 4; a++) {
    let first = 2;
    let second = 5;

    first = first * a;
    second = second * a;
    let str = "";
    for (let i = 1; i <= first; i++) {
        str += "*";
        if(i % 2 == 0) {
            console.log(str);
            str = "";
        }
    }

    if(a == 4) break;

    for(let j = 1; j<=second; j++) {
        str += "*";
        if(j % second == 0) {
            console.log(str);
        }
    }

}