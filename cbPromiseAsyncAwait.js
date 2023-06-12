function callback(cb) {
    setTimeout(() => {
        let result = 33;
        cb(null, result);
    }, 2000);
}
callback(function(a,b) { console.log('callback worked.', a, b) });

function promiseFunction () {
    return new Promise ((resolve, reject) => {
        cbFunction((error, result) => {
            if(error) {
                reject(error)
            }
            else {
                resolve(result)
            }
        }) 
    })    
}

async function asyncAwait () {
    try {
        const result = await promiseFunction();
        console.log(result);
    } catch (error) {
        console.error(error);
    }

}
