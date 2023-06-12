
for (let a = 1; a <= 3; a++) {
    let n = 6;
    n = n * a;
    let str = '';

    for (let i = 1; i <= n; i++) {
        str = str + "*";
        if (i == n || i == n / 2) {
            console.log(str);
            str = "";
        }
    }

    if (a == 3) {
        break;
    }

    for (let j = 0; j < 3; j++) {
        console.log("*");
    }
}