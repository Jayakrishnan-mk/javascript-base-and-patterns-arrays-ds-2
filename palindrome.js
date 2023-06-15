let str = "malayalam";
let j = 1;
let flag = 0;
let n = str.length;
for (let i = 0; i < n/2; i++) {
    if (str[i] == str[n - j]) {
        j++;
        continue;
    }
    else {
        flag++;
        break;
    }
}

if(flag == 1) {
    console.log('its not');
}
else console.log('palindrome');