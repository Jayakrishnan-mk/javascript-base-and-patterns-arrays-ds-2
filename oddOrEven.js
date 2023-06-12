const ar = [1,2,3,4,5,6];

const odd = ar.filter((ele) => {
    return ele % 2;        // odd
    return ele % 2 === 0;  // even
})

console.log('odd', odd);